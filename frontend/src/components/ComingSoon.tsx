import { Clock } from "lucide-react";

interface ComingSoonProps {
  eventName?: string;
  description?: string;
}

export default function ComingSoon({ eventName, description }: ComingSoonProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[var(--card)]/80 p-6 md:p-8 max-w-lg mx-auto text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#06b6d4]/20 text-[#06b6d4] mb-4">
        <Clock className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {eventName ? `${eventName} — Coming soon` : "Coming soon"}
      </h3>
      <p className="text-white/60">
        {description ?? "Registration for this event will open later. Check back or follow us for updates."}
      </p>
    </div>
  );
}
