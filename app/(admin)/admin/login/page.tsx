import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Diatan Health",
};

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#F0F7F4" }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
            Diatan Health Admin
          </h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            Sign in to access the admin dashboard
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
