"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lock } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid email or password. Please try again.");
      } else if (result?.ok) {
        toast.success("Signed in successfully!");
        router.push("/admin");
        router.refresh();
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } catch {
      toast.error("Sign in failed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border shadow-md" style={{ borderColor: "#E2EAE6" }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base" style={{ color: "#2C3E50" }}>
          <Lock className="w-4 h-4" style={{ color: "#27AE60" }} aria-hidden="true" />
          Admin Sign In
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="mt-1"
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full font-semibold"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
