import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    DEBUGGING_FORM_SUBMIT_URL,
    DEBUGGING_FORM_ENTRIES,
} from "@/config/googleForms";

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

type Member = {
    name: string;
    regno: string;
    email: string;
    mobile: string;
    year: string;
    section: string;
};

const emptyMember = (): Member => ({
    name: "", regno: "", email: "", mobile: "", year: "", section: "",
});

const MEMBER_COLORS = [
    "text-[#06b6d4]",
    "text-[#8b5cf6]",
    "text-[#22c55e]",
];

export default function DebuggingForm() {
    const [formData, setFormData] = useState<Member[]>([
        emptyMember(), emptyMember(), emptyMember(),
    ]);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        idx: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updated = [...prev];
            updated[idx] = {
                ...updated[idx],
                [name]: value,
                ...(name === "year" ? { section: "" } : {}),
            };
            return updated;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);

        const form = document.createElement("form");
        form.method = "POST";
        form.action = DEBUGGING_FORM_SUBMIT_URL;
        form.target = "google-form-iframe-debugging";
        form.style.display = "none";

        const entries: [string, string][] = [
            [DEBUGGING_FORM_ENTRIES.member1Name, formData[0].name],
            [DEBUGGING_FORM_ENTRIES.regno1, formData[0].regno],
            [DEBUGGING_FORM_ENTRIES.email1, formData[0].email],
            [DEBUGGING_FORM_ENTRIES.mobile1, formData[0].mobile],
            [DEBUGGING_FORM_ENTRIES.year1, formData[0].year],
            [DEBUGGING_FORM_ENTRIES.section1, formData[0].section],
            [DEBUGGING_FORM_ENTRIES.member2Name, formData[1].name],
            [DEBUGGING_FORM_ENTRIES.regno2, formData[1].regno],
            [DEBUGGING_FORM_ENTRIES.email2, formData[1].email],
            [DEBUGGING_FORM_ENTRIES.mobile2, formData[1].mobile],
            [DEBUGGING_FORM_ENTRIES.year2, formData[1].year],
            [DEBUGGING_FORM_ENTRIES.section2, formData[1].section],
            [DEBUGGING_FORM_ENTRIES.member3Name, formData[2].name],
            [DEBUGGING_FORM_ENTRIES.regno3, formData[2].regno],
            [DEBUGGING_FORM_ENTRIES.email3, formData[2].email],
            [DEBUGGING_FORM_ENTRIES.mobile3, formData[2].mobile],
            [DEBUGGING_FORM_ENTRIES.year3, formData[2].year],
            [DEBUGGING_FORM_ENTRIES.section3, formData[2].section],
        ];

        entries.forEach(([name, value]) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);

        let iframe = document.getElementById("google-form-iframe-debugging") as HTMLIFrameElement;
        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.id = "google-form-iframe-debugging";
            iframe.name = "google-form-iframe-debugging";
            iframe.style.display = "none";
            document.body.appendChild(iframe);
        }

        form.submit();
        form.remove();

        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setFormData([emptyMember(), emptyMember(), emptyMember()]);
        }, 1500);
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
                    Your team has been registered for Debugging &amp; Defend. We will share further information soon.
                </p>
            </div>
        );
    }

    // ── Form ──────────────────────────────────────────────────────────────────
    return (
        <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 md:p-8 max-w-2xl w-full">
            <h3 className="text-xl font-semibold text-white mb-6">
                Debugging &amp; Defend — Registration (Team of 3)
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                {formData.map((member, idx) => (
                    <div key={idx} className="rounded-xl border border-white/10 p-4 space-y-4">
                        <p className={`font-semibold text-sm uppercase tracking-wider ${MEMBER_COLORS[idx]}`}>
                            Member {idx + 1}
                        </p>

                        <div className="space-y-2">
                            <Label htmlFor={`regno-${idx}`} className="text-white/80">Registration Number</Label>
                            <Input
                                id={`regno-${idx}`} name="regno" type="text"
                                placeholder="Enter full registration number"
                                value={member.regno} onChange={(e) => handleChange(idx, e)}
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
                            <Label htmlFor={`mobile-${idx}`} className="text-white/80">Phone</Label>
                            <Input
                                id={`mobile-${idx}`} name="mobile" type="tel"
                                placeholder="10-digit mobile number"
                                value={member.mobile} onChange={(e) => handleChange(idx, e)}
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

            <iframe
                id="google-form-iframe-debugging"
                name="google-form-iframe-debugging"
                title="Form submission"
                className="hidden"
            />
        </div>
    );
}
