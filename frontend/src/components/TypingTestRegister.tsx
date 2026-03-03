import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  GOOGLE_FORM_SUBMIT_URL,
  GOOGLE_FORM_ENTRIES,
} from "@/config/googleForms";

const YEARS = ["2", "3"];

const SECTION_OPTIONS: Record<string, string[]> = {
  "2": Array.from({ length: 22 }, (_, i) => String(i + 1)),
  "3": Array.from({ length: 19 }, (_, i) => String(i + 1)),
};

type FormData = {
  registrationNo: string;
  name: string;
  email: string;
  phone: string;
  year: string;
  section: string;
};

const initialData: FormData = {
  registrationNo: "",
  name: "",
  email: "",
  phone: "",
  year: "",
  section: "",
};

export default function TypingTestRegister() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const availableSections =
    formData.year && SECTION_OPTIONS[formData.year]
      ? SECTION_OPTIONS[formData.year]
      : [];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "year") {
      setFormData((prev) => ({ ...prev, year: value, section: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (
      !formData.registrationNo ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.year ||
      !formData.section
    ) {
      return;
    }

    setSubmitting(true);

    // Build form and submit to Google Form via hidden iframe (avoids CORS)
    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_SUBMIT_URL;
    form.target = "google-form-iframe";
    form.style.display = "none";

    const entries = [
      [GOOGLE_FORM_ENTRIES.registrationNo, formData.registrationNo],
      [GOOGLE_FORM_ENTRIES.name, formData.name],
      [GOOGLE_FORM_ENTRIES.email, formData.email],
      [GOOGLE_FORM_ENTRIES.phone, formData.phone],
      [GOOGLE_FORM_ENTRIES.year, formData.year],
      [GOOGLE_FORM_ENTRIES.section, formData.section],
    ];

    entries.forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);

    // Ensure iframe exists
    let iframe = document.getElementById(
      "google-form-iframe",
    ) as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "google-form-iframe";
      iframe.name = "google-form-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    form.submit();
    form.remove();

    // Assume success (Google Form doesn't return JSON; iframe loads confirmation page)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData(initialData);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 md:p-8 max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#22c55e]/20 text-[#22c55e] mb-4">
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Registration submitted
        </h3>
        <p className="text-white/60 text-sm">
          Your registration has been submitted successfully. We will update the
          Further Information
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 md:p-8 max-w-lg w-full">
      <h3 className="text-xl font-semibold text-white mb-6">
        Typing Test — Registration
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="registrationNo" className="text-white/80">
            Registration Number
          </Label>
          <Input
            id="registrationNo"
            name="registrationNo"
            type="text"
            placeholder="Enter Your Full Registration number"
            value={formData.registrationNo}
            onChange={handleChange}
            required
            className="bg-[var(--muted)] border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/80">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[var(--muted)] border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="someexample@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[var(--muted)] border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white/80">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="10 digit Mobile Numbers"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-[var(--muted)] border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year" className="text-white/80">
            Year
          </Label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full h-10 rounded-md border border-white/10 bg-[var(--muted)] px-3 py-2 text-sm text-white focus:ring-2 focus:ring-[#06b6d4] focus:outline-none"
          >
            <option value="">Select year</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                Year {y}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="section" className="text-white/80">
            Section
          </Label>
          <select
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
            className="w-full h-10 rounded-md border border-white/10 bg-[var(--muted)] px-3 py-2 text-sm text-white focus:ring-2 focus:ring-[#06b6d4] focus:outline-none"
          >
            <option value="">Select section</option>
            {availableSections.map((s) => (
              <option key={s} value={s}>
                Section {s}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 disabled:opacity-70 text-white font-semibold transition-all duration-300"
        >
          {submitting ? "Submitting…" : "Submit Registration"}
        </button>
      </form>

      <iframe
        ref={iframeRef}
        id="google-form-iframe"
        name="google-form-iframe"
        title="Form submission"
        className="hidden"
      />
    </div>
  );
}
