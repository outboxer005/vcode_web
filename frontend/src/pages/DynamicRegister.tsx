import TypingTestRegister from "@/components/TypingTestRegister";
import ComingSoon from "@/components/ComingSoon";
import { useParams } from "react-router-dom";

const EVENT_LABELS: Record<string, string> = {
  typingtest: "Typing Test",
  promptmaster: "Prompt Master",
  debugging: "Debugging & Defend",
  coding: "Coding Contest",
  quiz: "Technical Quiz",
  codehunt: "Code Hunt",
  hackathon: "Hackathon",
  poster: "Poster Presentation",
};

const DynamicRegister = () => {
  const { event } = useParams();
  const key = event?.toLowerCase() || "";

  if (key === "typingtest") {
    return (
      <div className="container mx-auto p-6 min-h-[60vh] flex flex-col items-center justify-center bg-[var(--background)]">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent text-center">Register for Typing Test</h2>
        <TypingTestRegister />
      </div>
    );
  }

  const eventName = EVENT_LABELS[key] || event;
  return (
    <div className="container mx-auto p-6 min-h-[60vh] flex flex-col items-center justify-center bg-[var(--background)]">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent text-center">Register for {eventName}</h2>
      <ComingSoon eventName={eventName} />
    </div>
  );
};

export default DynamicRegister;
