"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useState } from "react";
import {
  LayoutDashboard, Calendar, MessageSquare, BookOpen,
  Users, Settings, LogOut, Menu, X, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/appointments", label: "Appointments", icon: Calendar },
  { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
  { href: "/admin/blog", label: "Blog", icon: BookOpen },
  { href: "/admin/providers", label: "Providers", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  const NavContent = () => (
    <nav aria-label="Admin navigation">
      <div className="flex items-center gap-3 px-4 py-5 border-b" style={{ borderColor: "#E2EAE6" }}>
        <Image src="/images/logo.png" alt="Diatan Health" width={36} height={36} className="rounded-lg" />
        <div>
          <p className="font-bold text-sm" style={{ color: "#27AE60" }}>Diatan Health</p>
          <p className="text-xs" style={{ color: "#6B7280" }}>Admin Portal</p>
        </div>
      </div>
      <div className="px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: isActive ? "#E8F5EE" : "transparent",
                color: isActive ? "#27AE60" : "#4A5568",
              }}
              onClick={() => setSidebarOpen(false)}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="w-5 h-5" aria-hidden="true" />
              {item.label}
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" aria-hidden="true" />}
            </Link>
          );
        })}
      </div>
      <div className="px-3 mt-auto pt-4 border-t" style={{ borderColor: "#E2EAE6" }}>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-1"
          style={{ color: "#4A5568" }}
        >
          View Public Site
        </Link>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full text-left"
          style={{ color: "#E74C3C" }}
        >
          <LogOut className="w-5 h-5" aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F0F7F4" }}>
      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex flex-col w-60 shrink-0 border-r min-h-screen"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E2EAE6" }}
      >
        <NavContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 opacity-50"
            style={{ backgroundColor: "#000" }}
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="relative w-64 flex flex-col border-r"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E2EAE6" }}
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" style={{ color: "#6B7280" }} />
            </button>
            <NavContent />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div
          className="h-14 border-b flex items-center px-4 gap-4 shrink-0"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E2EAE6" }}
        >
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" style={{ color: "#4A5568" }} />
          </button>
          <h1 className="text-base font-semibold" style={{ color: "#2C3E50" }}>
            {navItems.find((n) => n.href === pathname)?.label || "Admin"}
          </h1>
        </div>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
