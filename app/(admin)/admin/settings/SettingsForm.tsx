"use client";

export default function SettingsForm() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>Settings</h1>
        <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
          Practice configuration and preferences
        </p>
      </div>
      <div
        className="rounded-xl border p-6"
        style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#2C3E50" }}>
          Practice Information
        </h2>
        <div className="space-y-2 text-sm" style={{ color: "#4A5568" }}>
          <div className="flex gap-4">
            <span className="font-medium w-40 shrink-0">Practice Name:</span>
            <span>Diatan Health Services, LLC</span>
          </div>
          <div className="flex gap-4">
            <span className="font-medium w-40 shrink-0">Phone:</span>
            <span>(954) 347-5845</span>
          </div>
          <div className="flex gap-4">
            <span className="font-medium w-40 shrink-0">Email:</span>
            <span>info@diatanhealthservices.com</span>
          </div>
          <div className="flex gap-4">
            <span className="font-medium w-40 shrink-0">Address:</span>
            <span>4200 NW 16th St. Suite 449, Lauderhill, FL 33313</span>
          </div>
          <div className="flex gap-4">
            <span className="font-medium w-40 shrink-0">Hours:</span>
            <span>Monday to Friday</span>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl border p-4 text-sm"
        style={{ borderColor: "#E2EAE6", backgroundColor: "#F0F7F4" }}
      >
        <p className="font-medium mb-1" style={{ color: "#2C3E50" }}>
          To update practice information:
        </p>
        <p style={{ color: "#6B7280" }}>
          Settings are managed via environment variables and database seed data.
          Contact your developer to update core practice information.
        </p>
      </div>
    </div>
  );
}
