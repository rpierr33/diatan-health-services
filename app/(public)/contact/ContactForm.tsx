"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more detail (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact_form" }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to send message");
      }
      setSubmitted(true);
      toast.success("Message sent! We will respond within 1 business day.");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2
          className="w-16 h-16 mx-auto mb-4"
          style={{ color: "#27AE60" }}
          aria-hidden="true"
        />
        <h3 className="text-xl font-bold mb-2" style={{ color: "#2C3E50" }}>
          Message Received!
        </h3>
        <p className="mb-4" style={{ color: "#4A5568" }}>
          We will respond within 1 business day. If this is urgent, call{" "}
          <a href="tel:9543475845" style={{ color: "#27AE60", fontWeight: 600 }}>
            (954) 347-5845
          </a>
          .
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          style={{ borderColor: "#27AE60", color: "#27AE60" }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1"
        />
        {errors.name && (
          <p id="name-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1"
        />
        {errors.email && (
          <p id="email-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="Optional"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="How can we help you?"
          rows={5}
          className="mt-1"
        />
        {errors.message && (
          <p id="message-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <div
        className="rounded-lg p-3 text-xs"
        style={{ backgroundColor: "#F0F7F4", color: "#6B7280" }}
      >
        Your information is protected by HIPAA privacy practices.{" "}
        <a href="/hipaa" style={{ color: "#27AE60" }}>
          View our HIPAA Notice
        </a>
        .
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold"
        style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
