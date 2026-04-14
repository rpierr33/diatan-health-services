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
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  positionId: z.string().optional(),
  coverLetter: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  jobs: Array<{ id: number; title: string }>;
}

export default function CareerApplicationForm({ jobs }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          careerId: data.positionId ? parseInt(data.positionId, 10) : undefined,
          coverLetter: data.coverLetter,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit application");
      }
      setSubmitted(true);
      toast.success("Application submitted! We will be in touch soon.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle2
          className="w-16 h-16 mx-auto mb-4"
          style={{ color: "#27AE60" }}
          aria-hidden="true"
        />
        <h3 className="text-xl font-bold mb-2" style={{ color: "#2C3E50" }}>
          Application Received!
        </h3>
        <p style={{ color: "#4A5568" }}>
          Thank you for your interest. We will review your application and
          contact you within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <Label htmlFor="applyName">Full Name *</Label>
        <Input
          id="applyName"
          {...register("name")}
          aria-invalid={!!errors.name}
          className="mt-1"
        />
        {errors.name && (
          <p className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="applyEmail">Email Address *</Label>
        <Input
          id="applyEmail"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className="mt-1"
        />
        {errors.email && (
          <p className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="applyPhone">Phone Number</Label>
        <Input
          id="applyPhone"
          type="tel"
          {...register("phone")}
          placeholder="Optional"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="positionId">Position of Interest</Label>
        <Select
          value={watch("positionId") ?? ""}
          onValueChange={(val) => setValue("positionId", val)}
        >
          <SelectTrigger id="positionId" className="mt-1">
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Interest</SelectItem>
            {jobs.map((job) => (
              <SelectItem key={job.id} value={String(job.id)}>
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="coverLetter">Cover Letter / Message</Label>
        <Textarea
          id="coverLetter"
          {...register("coverLetter")}
          placeholder="Tell us about yourself and why you want to join Diatan Health..."
          rows={5}
          className="mt-1"
        />
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
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}
