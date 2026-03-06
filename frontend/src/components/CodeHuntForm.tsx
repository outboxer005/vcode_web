import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

// ─── Shared constants ────────────────────────────────────────────────────────
const YEARS = ["2", "3"];
const SECTION_OPTIONS: Record<string, string[]> = {
  "2": Array.from({ length: 22 }, (_, i) => String(i + 1)),
  "3": Array.from({ length: 19 }, (_, i) => String(i + 1)),
};

// ─── Shared style constants ───────────────────────────────────────────────────
const selectCls =
  "w-full h-10 rounded-md border border-white/10 bg-[var(--muted)] px-3 py-2 text-sm text-white focus:ring-2 focus:ring-[#06b6d4] focus:outline-none";
const inputCls = "bg-[var(--muted)] border-white/10";

type Participant = {
  name: string;
  email: string;
  registrationNo: string;
  phoneNo: string;
  year: string;
  section: string;
};

const emptyMember = (): Participant => ({
  name: "", email: "", registrationNo: "", phoneNo: "", year: "", section: "",
});

// Member accent colors
const MEMBER_COLORS = [
  "text-[#06b6d4]",
  "text-[#8b5cf6]",
  "text-[#22c55e]",
  "text-[#f59e0b]",
];

export default function CodeHuntForm() {
  const [formData, setFormData] = useState<Participant[]>([
    emptyMember(), emptyMember(), emptyMember(), emptyMember(),
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [name]: value,
        ...(name === "year" ? { section: "" } : {}),
      };
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    for (const m of formData) {
      if (!m.name || !m.email || !m.registrationNo || !m.phoneNo || !m.year || !m.section) {
        toast.error("All fields are required for every member.");
        return;
      }
    }

    setSubmitting(true);
    try {
      await axios.post("https://vcode-m6ni.onrender.com/api/register", {
        eventName: "Code Hunt",
        participants: formData,
      });
      setSubmitted(true);
      setFormData([emptyMember(), emptyMember(), emptyMember(), emptyMember()]);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error("Registration failed: " + error.response.data.error);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  // ── Success screen ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 md:p-8 max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#22c55e]/20 text-[#22c55e] mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Registration submitted</h3>
        <p className="text-white/60 text-sm">
          Your team of 4 has been registered for Code Hunt. We will share further
          information soon.
        </p>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 md:p-8 max-w-2xl w-full">
      <Toaster position="top-right" />
      <h3 className="text-xl font-semibold text-white mb-6">
        Code Hunt — Registration (Team of 4)
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {formData.map((member, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 p-4 space-y-4">
            <p className={`font-semibold text-sm uppercase tracking-wider ${MEMBER_COLORS[idx]}`}>
              Member {idx + 1}
            </p>

            <div className="space-y-2">
              <Label htmlFor={`registrationNo-${idx}`} className="text-white/80">Registration Number</Label>
              <Input
                id={`registrationNo-${idx}`} name="registrationNo" type="text"
                placeholder="Enter full registration number"
                value={member.registrationNo} onChange={(e) => handleChange(idx, e)}
                required className={inputCls}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`name-${idx}`} className="text-white/80">Full Name</Label>
              <Input
                id={`name-${idx}`} name="name" type="text"
                placeholder="Enter your full name"
                value={member.name} onChange={(e) => handleChange(idx, e)}
                required className={inputCls}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`email-${idx}`} className="text-white/80">Email</Label>
              <Input
                id={`email-${idx}`} name="email" type="email"
                placeholder="example@gmail.com"
                value={member.email} onChange={(e) => handleChange(idx, e)}
                required className={inputCls}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`phoneNo-${idx}`} className="text-white/80">Phone</Label>
              <Input
                id={`phoneNo-${idx}`} name="phoneNo" type="tel"
                placeholder="10-digit mobile number"
                value={member.phoneNo} onChange={(e) => handleChange(idx, e)}
                required className={inputCls}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`year-${idx}`} className="text-white/80">Year</Label>
              <select
                id={`year-${idx}`} name="year"
                value={member.year} onChange={(e) => handleChange(idx, e)}
                required className={selectCls}
              >
                <option value="">Select year</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>Year {y}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`section-${idx}`} className="text-white/80">Section</Label>
              <select
                id={`section-${idx}`} name="section"
                value={member.section} onChange={(e) => handleChange(idx, e)}
                required className={selectCls}
                disabled={!member.year}
              >
                <option value="">Select section</option>
                {(SECTION_OPTIONS[member.year] ?? []).map((s) => (
                  <option key={s} value={s}>Section {s}</option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 disabled:opacity-70 text-white font-semibold transition-all duration-300"
        >
          {submitting ? "Submitting…" : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}
