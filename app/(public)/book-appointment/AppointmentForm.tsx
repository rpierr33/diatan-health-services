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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";

const schema = z.object({
  // Step 1 — Personal Info
  patientFirstName: z.string().min(1, "First name is required"),
  patientLastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  dateOfBirth: z.string().optional(),
  isNewPatient: z.boolean(),
  // Step 2 — Insurance
  insurance: z.string().min(1, "Please select your insurance"),
  memberId: z.string().optional(),
  // Step 3 — Focus Area & Schedule
  focusArea: z.string().min(1, "Please select a focus area"),
  appointmentType: z.string().min(1, "Please select appointment type"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
  // Step 4 — Consent
  hipaaConsent: z.boolean().refine((val) => val === true, "HIPAA consent is required"),
});

type FormData = z.infer<typeof schema>;

const insuranceOptions = [
  "Self-Pay",
  "Medicare",
  "Medicaid",
  "United Healthcare",
  "Avmed",
  "Oscar Health",
  "Cigna",
  "UMR",
  "Medica",
  "Preferred Care Partners",
  "Oxford Health",
  "Obama Care / ACA",
  "Other",
];

const focusAreas = [
  "Major Depressive Disorder",
  "Bipolar Disorder",
  "Anxiety Disorders",
  "OCD",
  "PTSD",
  "ADHD",
  "Eating Disorders",
  "Substance Use Disorders",
  "Depression",
  "Child Abuse / Trauma",
  "Physical Illness",
  "Panic Disorder",
  "Gambling Disorder",
  "Learning Disorders",
  "Personality Disorders",
  "Gender Identity",
  "Loneliness / Isolation",
  "Sleep Problems",
  "School Difficulties",
  "Parenting Issues",
  "Dementia",
  "Debt / Financial Stress",
  "Mental Health Urgent Care",
  "Trauma Treatment",
  "Addiction Treatment",
  "Schizophrenia",
  "General Mental Wellness",
  "Other / Not Listed",
];

const steps = [
  { label: "Personal Info", number: 1 },
  { label: "Insurance", number: 2 },
  { label: "Appointment", number: 3 },
  { label: "Consent", number: 4 },
];

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      patientFirstName: "",
      patientLastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      isNewPatient: true,
      insurance: "",
      memberId: "",
      focusArea: "",
      appointmentType: "in_person",
      preferredDate: "",
      preferredTime: "",
      message: "",
      hipaaConsent: false,
    },
  });

  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = form;

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ["patientFirstName", "patientLastName", "email", "phone"];
    if (step === 2) fieldsToValidate = ["insurance"];
    if (step === 3) fieldsToValidate = ["focusArea", "appointmentType"];
    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit appointment");
      }
      setSubmitted(true);
      toast.success("Appointment request submitted! We will contact you within 1 business day.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card
        className="border text-center py-12"
        style={{ borderColor: "#27AE60", backgroundColor: "#F0F7F4" }}
      >
        <CardContent>
          <CheckCircle2
            className="w-16 h-16 mx-auto mb-4"
            style={{ color: "#27AE60" }}
            aria-hidden="true"
          />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#2C3E50" }}>
            Appointment Request Received!
          </h2>
          <p className="text-base mb-6" style={{ color: "#4A5568" }}>
            Thank you for reaching out. Our team will review your request and
            contact you within 1 business day to confirm your appointment.
          </p>
          <div className="space-y-2 text-sm" style={{ color: "#6B7280" }}>
            <p>If you need immediate assistance, please call:</p>
            <a
              href="tel:9543475845"
              className="text-lg font-bold block"
              style={{ color: "#27AE60" }}
            >
              (954) 347-5845
            </a>
            <p className="font-medium" style={{ color: "#E74C3C" }}>
              If you are in crisis, call or text <strong>988</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <div key={s.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                style={{
                  backgroundColor: step >= s.number ? "#27AE60" : "#E2EAE6",
                  color: step >= s.number ? "#FFFFFF" : "#6B7280",
                }}
                aria-current={step === s.number ? "step" : undefined}
              >
                {step > s.number ? (
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                ) : (
                  s.number
                )}
              </div>
              <span
                className="text-xs mt-1 hidden sm:block font-medium"
                style={{ color: step >= s.number ? "#27AE60" : "#6B7280" }}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="h-0.5 flex-1 mx-2 transition-all"
                style={{
                  backgroundColor: step > s.number ? "#27AE60" : "#E2EAE6",
                  minWidth: "2rem",
                }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <Card className="border" style={{ borderColor: "#E2EAE6" }}>
            <CardHeader>
              <CardTitle style={{ color: "#2C3E50" }}>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="patientFirstName">First Name *</Label>
                  <Input
                    id="patientFirstName"
                    {...register("patientFirstName")}
                    aria-invalid={!!errors.patientFirstName}
                    aria-describedby={errors.patientFirstName ? "firstName-error" : undefined}
                    className="mt-1"
                  />
                  {errors.patientFirstName && (
                    <p id="firstName-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
                      {errors.patientFirstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="patientLastName">Last Name *</Label>
                  <Input
                    id="patientLastName"
                    {...register("patientLastName")}
                    aria-invalid={!!errors.patientLastName}
                    aria-describedby={errors.patientLastName ? "lastName-error" : undefined}
                    className="mt-1"
                  />
                  {errors.patientLastName && (
                    <p id="lastName-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
                      {errors.patientLastName.message}
                    </p>
                  )}
                </div>
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
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="(555) 555-5555"
                  className="mt-1"
                />
                {errors.phone && (
                  <p id="phone-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  {...register("dateOfBirth")}
                  className="mt-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="isNewPatient"
                  checked={watch("isNewPatient")}
                  onCheckedChange={(checked) => setValue("isNewPatient", !!checked)}
                />
                <Label htmlFor="isNewPatient" className="cursor-pointer">
                  I am a new patient
                </Label>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Insurance */}
        {step === 2 && (
          <Card className="border" style={{ borderColor: "#E2EAE6" }}>
            <CardHeader>
              <CardTitle style={{ color: "#2C3E50" }}>Insurance & Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="insurance">Insurance Provider *</Label>
                <Select
                  value={watch("insurance") ?? ""}
                  onValueChange={(val) => setValue("insurance", val)}
                >
                  <SelectTrigger
                    id="insurance"
                    className="mt-1"
                    aria-invalid={!!errors.insurance}
                  >
                    <SelectValue placeholder="Select your insurance" />
                  </SelectTrigger>
                  <SelectContent>
                    {insuranceOptions.map((ins) => (
                      <SelectItem key={ins} value={ins.toLowerCase().replace(/\s+/g, "_")}>
                        {ins}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.insurance && (
                  <p className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
                    {errors.insurance.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="memberId">Member ID / Policy Number</Label>
                <Input
                  id="memberId"
                  {...register("memberId")}
                  placeholder="Optional"
                  className="mt-1"
                />
              </div>
              <div
                className="rounded-lg p-4 text-sm"
                style={{ backgroundColor: "#F0F7F4", borderLeft: "3px solid #27AE60" }}
              >
                <p className="font-semibold mb-1" style={{ color: "#2C3E50" }}>
                  Insurance Verification
                </p>
                <p style={{ color: "#4A5568" }}>
                  We will verify your benefits before your appointment. If you
                  have questions about coverage, call us at{" "}
                  <a href="tel:9543475845" style={{ color: "#27AE60", fontWeight: 600 }}>
                    (954) 347-5845
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Appointment Details */}
        {step === 3 && (
          <Card className="border" style={{ borderColor: "#E2EAE6" }}>
            <CardHeader>
              <CardTitle style={{ color: "#2C3E50" }}>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="focusArea">Primary Concern / Focus Area *</Label>
                <Select
                  value={watch("focusArea") ?? ""}
                  onValueChange={(val) => setValue("focusArea", val)}
                >
                  <SelectTrigger
                    id="focusArea"
                    className="mt-1"
                    aria-invalid={!!errors.focusArea}
                  >
                    <SelectValue placeholder="Select your primary concern" />
                  </SelectTrigger>
                  <SelectContent>
                    {focusAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.focusArea && (
                  <p className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
                    {errors.focusArea.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="appointmentType">Appointment Type *</Label>
                <Select
                  value={watch("appointmentType") ?? ""}
                  onValueChange={(val) => setValue("appointmentType", val)}
                >
                  <SelectTrigger id="appointmentType" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in_person">In-Person</SelectItem>
                    <SelectItem value="telehealth">Telehealth (Video)</SelectItem>
                    <SelectItem value="phone">Phone Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    {...register("preferredDate")}
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select
                    value={watch("preferredTime") ?? ""}
                    onValueChange={(val) => setValue("preferredTime", val)}
                  >
                    <SelectTrigger id="preferredTime" className="mt-1">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8am–12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm–5pm)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Anything else you would like us to know before your appointment?"
                  rows={4}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Consent */}
        {step === 4 && (
          <Card className="border" style={{ borderColor: "#E2EAE6" }}>
            <CardHeader>
              <CardTitle style={{ color: "#2C3E50" }}>Consent & Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Summary */}
              <div
                className="rounded-lg p-4 text-sm space-y-2"
                style={{ backgroundColor: "#F0F7F4" }}
              >
                <p className="font-semibold" style={{ color: "#2C3E50" }}>
                  Appointment Summary
                </p>
                <div className="grid grid-cols-2 gap-2" style={{ color: "#4A5568" }}>
                  <span className="font-medium">Name:</span>
                  <span>{watch("patientFirstName")} {watch("patientLastName")}</span>
                  <span className="font-medium">Email:</span>
                  <span>{watch("email")}</span>
                  <span className="font-medium">Insurance:</span>
                  <span>{watch("insurance")}</span>
                  <span className="font-medium">Focus Area:</span>
                  <span>{watch("focusArea")}</span>
                  <span className="font-medium">Type:</span>
                  <span>
                    {watch("appointmentType") === "in_person"
                      ? "In-Person"
                      : watch("appointmentType") === "telehealth"
                      ? "Telehealth"
                      : "Phone"}
                  </span>
                </div>
              </div>

              {/* HIPAA Notice */}
              <div
                className="rounded-lg p-4 text-sm leading-relaxed"
                style={{ backgroundColor: "#FEF9E7", border: "1px solid #F59E0B" }}
              >
                <p className="font-semibold mb-2" style={{ color: "#92400E" }}>
                  HIPAA Notice of Privacy Practices
                </p>
                <p style={{ color: "#78350F" }}>
                  Diatan Health Services, LLC is committed to protecting your
                  health information. Your information will only be used for
                  treatment, payment, and healthcare operations as required by
                  HIPAA. You have the right to access, amend, and request
                  restrictions on your health information.{" "}
                  <a href="/hipaa" style={{ color: "#27AE60" }} className="underline">
                    View full HIPAA Notice
                  </a>
                  .
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="hipaaConsent"
                  checked={watch("hipaaConsent")}
                  onCheckedChange={(checked) => setValue("hipaaConsent", !!checked)}
                  aria-describedby={errors.hipaaConsent ? "hipaa-error" : undefined}
                />
                <div>
                  <Label htmlFor="hipaaConsent" className="cursor-pointer font-medium leading-snug">
                    I acknowledge that I have read and understand the HIPAA
                    Notice of Privacy Practices and consent to the use of my
                    information for treatment and care coordination. *
                  </Label>
                  {errors.hipaaConsent && (
                    <p id="hipaa-error" className="text-xs mt-1" style={{ color: "#E74C3C" }} role="alert">
                      {errors.hipaaConsent.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              style={{ borderColor: "#E2EAE6", color: "#2C3E50" }}
            >
              <ChevronLeft className="w-4 h-4 mr-1" aria-hidden="true" />
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  Submit Appointment Request
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
