import Main from "@/components/Main";
import PhotoGallery from "@/components/PhotoGallery";
import { TimelineDemo } from "@/components/TimelineDemo";
import { Link } from "react-router-dom";
import React from "react";
import {
  Type,
  ImageIcon,
  Bug,
  Code,
  BookOpen,
  Cpu,
  Search,
} from "lucide-react";

// Import event images
import typingTestImg from "@/assets/TypingChallenge.png";
import promptMasterImg from "@/assets/PropmtMaster.png";
import debuggingDefendImg from "@/assets/Degugging&Defend.png";
import codingContestImg from "@/assets/Coding Contest.png";
import technicalQuizImg from "@/assets/Technical Quiz.png";
import hackathonImg from "@/assets/Hackathon.png";
import codeHuntImg from "@/assets/Code Hunt.png";
import posterPresentationImg from "@/assets/Poster Presentation.png";

const featuredEvents = [
  {
    title: "Typing Test",
    label: "Speed Challenge",
    date: "Open now",
    description: "Test your typing speed and accuracy.",
    image: typingTestImg,
    icon: Type,
    registerUrl: "/register/typingtest",
    registrationOpen: true,
  },
  {
    title: "Prompt Master",
    label: "AI Challenge",
    date: "Open now",
    description: "Given an image, recreate it using AI tools. Accuracy wins.",
    image: promptMasterImg,
    icon: ImageIcon,
    registerUrl: "/register/promptmaster",
    registrationOpen: true,
  },
  {
    title: "Debugging & Defend",
    label: "Team of 3",
    date: "Open now",
    description: "Fix bugs in HTML, CSS & JS. Make the project work as specified.",
    image: debuggingDefendImg,
    icon: Bug,
    registerUrl: "/register/debugging",
    registrationOpen: true,
  },
  {
    title: "Coding Contest",
    label: "Individuals",
    date: "Open now",
    description:
      "Solve problems in C, C++, Python, Java, or JS. Year-wise individuals.",
    image: codingContestImg,
    icon: Code,
    registerUrl: "/register/coding",
    registrationOpen: true,
  },
  {
    title: "Technical Quiz",
    label: "Team of 4",
    date: "Open now",
    description: "MCQs on OS, DBMS, OOPs, Algorithms & Programming. Team of 4.",
    image: technicalQuizImg,
    icon: BookOpen,
    registerUrl: "/register/quiz",
    registrationOpen: true,
  },
  {
    title: "Hackathon",
    label: "Team Event",
    date: "Coming Soon",
    description: "Innovate, collaborate, create groundbreaking solutions!",
    image: hackathonImg,
    icon: Cpu,
    registerUrl: "/register/hackathon",
    registrationOpen: false,
  },
  {
    title: "Code Hunt",
    label: "Team of 4",
    date: "Open now",
    description: "Follow clues, crack levels. VCODE Day morning—team of 4.",
    image: codeHuntImg,
    icon: Search,
    registerUrl: "/register/codehunt",
    registrationOpen: true,
  },
  {
    title: "Poster Presentation",
    label: "Visual Showcase",
    date: "Coming Soon",
    description: "Design a technical poster that clearly communicates your idea or solution.",
    image: posterPresentationImg,
    icon: ImageIcon,
    registerUrl: "/register/poster",
    registrationOpen: false,
  },
];

const Home = (): React.ReactElement => {
  return (
    <>
      <Main />

      {/* Technical events strip on landing page */}
      <section className="bg-[var(--background)] py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs md:text-sm font-mono tracking-[0.3em] text-[#06b6d4] uppercase text-center mb-3">
            Technical Events
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            What&apos;s coming up in{" "}
            <span className="text-[#8b5cf6]">VCODE 2026</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.title}
                  className="group rounded-2xl border border-white/10 bg-[var(--card)]/70 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:border-[#06b6d4]/40 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] animate-fadeInUp"
                  style={{ opacity: 0, animationDelay: `${index * 0.06}s` }}
                >
                  <div className="relative h-48 overflow-hidden bg-[var(--card)]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-[#06b6d4]" />
                      </span>
                      <span className="px-3 py-1 rounded-md bg-white/10 text-xs font-medium uppercase tracking-wider text-white/90">
                        {event.label}
                      </span>
                    </div>
                    {event.registrationOpen && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#22c55e]/30 text-[#22c55e] text-xs font-bold uppercase tracking-wider">
                        Open
                      </span>
                    )}
                    <p className="absolute bottom-4 left-4 text-xs font-mono uppercase tracking-[0.25em] text-[#06b6d4]">
                      {event.date}
                    </p>
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    <Link
                      to={event.registerUrl}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#06b6d4] hover:text-[#06b6d4]/80 transition-colors"
                    >
                      {event.registrationOpen
                        ? "Register now →"
                        : "View details →"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TimelineDemo />
      <PhotoGallery />
    </>
  );
};

export default Home;
