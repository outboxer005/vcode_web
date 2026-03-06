import React from "react";
import TypingTestRegister from "@/components/TypingTestRegister";
import QuizForm from "@/components/QuizForm";
import CodingForm from "@/components/CodingForm";
import CodeHuntForm from "@/components/CodeHuntForm";
import PromptMasterForm from "@/components/PromptMasterForm";
import DebuggingForm from "@/components/DebuggingForm";
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

  // Wrapper: consistent page layout
  const wrap = (title: string, child: React.ReactNode) => (
    <div className="container mx-auto p-6 min-h-[60vh] flex flex-col items-center justify-center bg-[var(--background)]">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent text-center">
        Register for {title}
      </h2>
      {child}
    </div>
  );

  if (key === "typingtest") return wrap("Typing Test", <TypingTestRegister />);
  if (key === "quiz") return wrap("Technical Quiz", <QuizForm />);
  if (key === "coding") return wrap("Coding Contest", <CodingForm />);
  if (key === "codehunt") return wrap("Code Hunt", <CodeHuntForm />);
  if (key === "debugging") return wrap("Debugging & Defend", <DebuggingForm />);

  const eventName = EVENT_LABELS[key] || event;
  return wrap(eventName as string, <ComingSoon eventName={eventName} />);
};

export default DynamicRegister;
