import {
  BookOpen,
  Code,
  Bug,
  ImageIcon,
  Search,
  Cpu,
  Type,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import HeaderButton from "./HeaderButton";
import { useState } from "react";
import InfoModal from "./InfoModal";

// Import event images
import typingTestImg from "@/assets/TypingChallenge.png";
import promptMasterImg from "@/assets/PropmtMaster.png";
import debuggingDefendImg from "@/assets/Degugging&Defend.png";
import codingContestImg from "@/assets/Coding Contest.png";
import technicalQuizImg from "@/assets/Technical Quiz.png";
import hackathonImg from "@/assets/Hackathon.png";
import codeHuntImg from "@/assets/Code Hunt.png";
import posterPresentationImg from "@/assets/Poster Presentation.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eventDetails: Record<string, any> = {
  "Typing Test": {
    Description:
      " Participants attempt multiple 60-second typing tests within 10 minutes, and the highest WPM achieved is considered as the final score",
    Rounds: "2",
    Venue: "To be announced shortly",
    Payment: "Mandatory",
  },
  "Prompt Master": {
    Description:
      "Based on a given image, students must generate a similar output using various AI tools. Accurate images will be considered.",
    "Team Size": "3 Members",
    Rounds: "2",
    Venue: "To be announced shortly",
    Payment: "Mandatory",
  },
  "Debugging & Defend": {
    Description:
      "Participants fix bugs in given HTML, CSS, and JavaScript files to make the project work as per the required features",
    "Team Size": "3 Members",
    Rounds: "2",
    Venue: "To be announced shortly",
    Payment: "Mandatory",
  },
  "Coding Contest": {
    Description: "Crafting logic, solving problems, creating possibilities!",
    "Team Size": "1",
    Levels: "2",
    Venue: "To be announced shortly",
    "Allowed Languages": "C, C++, Java, Python",
    Payment: "Mandatory",
  },
  "Technical Quiz": {
    Description:
      "A concept-based quiz covering OS, DBMS, OOPS, Algorithms, and Programming.",
    "Team Size": "4",
    Levels: "2",
    Venue: "To be announced shortly",
    Topics: "OS, DBMS, Data Structures, Code Snippets",
    Payment: "Mandatory",
  },
  "Poster Presentation": {
    Description:
      "Innovative Ideas. Creative Design. Impactful Solutions. Participants present a technical topic from CSE themes through an A4 hard copy poster.",
    "Team Size": "2",
    Levels: "To be announced shortly",
    Venue: "To be announced shortly",
    "Submission Format": "Hard Copy (A4)",
    Payment: "Mandatory",
  },
  Hackathon: {
    Description: "Innovate, collaborate, create groundbreaking solutions!",
    "Team Size": "3rd Years – 3 Members, 2nd Years – 2 Members (Mandatory)",
    Levels: "To be announced shortly",
    Venue: "To be announced shortly",
    Duration: "To be announced shortly",
    Domain: "Web",
    Theme: "To be announced shortly",
    Payment: "Mandatory",
  },
  "Code Hunt": {
    Description:
      "Participants follow clue-based paths and solve logical challenges to reach the final answer",
    "Team Size": "4",
    Levels: "6-7",
    Venue: "To be announced shortly",
    Payment: "Mandatory",
  },
};

const eventConfig = [
  {
    area: "md:[grid-area:1/1/2/13] xl:[grid-area:1/1/2/13]",
    icon: <Cpu className="h-6 w-6 text-rose-400" />,
    title: "Hackathon",
    label: "Team Event",
    description: "Innovate, collaborate, create groundbreaking solutions!",
    img: hackathonImg,
    url: "/register/hackathon",
    registrationOpen: false,
  },
  {
    area: "md:[grid-area:2/1/3/5] xl:[grid-area:2/1/3/5]",
    icon: <Type className="h-6 w-6 text-lime-400" />,
    title: "Typing Test",
    label: "Speed Challenge",
    description: "Test your typing speed and accuracy.",
    img: typingTestImg,
    url: "/register/typingtest",
    registrationOpen: true,
  },
  {
    area: "md:[grid-area:2/5/3/9] xl:[grid-area:2/5/3/9]",
    icon: <ImageIcon className="h-6 w-6 text-cyan-400" />,
    title: "Prompt Master",
    label: "AI Challenge",
    description: "Given an image, recreate it using AI tools. Accuracy wins.",
    img: promptMasterImg,
    url: "/register/promptmaster",
    registrationOpen: false,
  },
  {
    area: "md:[grid-area:2/9/3/13] xl:[grid-area:2/9/3/13]",
    icon: <Bug className="h-6 w-6 text-amber-400" />,
    title: "Debugging & Defend",
    label: "Team of 3",
    description:
      "Fix bugs in HTML, CSS & JS. Make the project work as specified.",
    img: debuggingDefendImg,
    url: "/register/debugging",
    registrationOpen: true,
  },
  {
    area: "md:[grid-area:3/1/4/5] xl:[grid-area:3/1/4/5]",
    icon: <BookOpen className="h-6 w-6 text-violet-400" />,
    title: "Technical Quiz",
    label: "Team of 4",
    description: "MCQs on OS, DBMS, OOPs, Algorithms & Programming. Team of 4.",
    img: technicalQuizImg,
    url: "/register/quiz",
    registrationOpen: true,
  },
  {
    area: "md:[grid-area:3/5/4/9] xl:[grid-area:3/5/4/9]",
    icon: <Code className="h-6 w-6 text-emerald-400" />,
    title: "Coding Contest",
    label: "Individuals",
    description:
      "Solve problems in C, C++, Python, Java, or JS. Year-wise individuals.",
    img: codingContestImg,
    url: "/register/coding",
    registrationOpen: true,
  },
  {
    area: "md:[grid-area:3/9/4/13] xl:[grid-area:3/9/4/13]",
    icon: <ImageIcon className="h-6 w-6 text-fuchsia-400" />,
    title: "Poster Presentation",
    label: "Visual Showcase",
    description:
      "Design a technical poster that clearly communicates your idea or solution.",
    img: posterPresentationImg,
    url: "/register/poster",
    registrationOpen: false,
  },
  {
    area: "md:[grid-area:4/1/5/13] xl:[grid-area:4/1/5/13]",
    icon: <Search className="h-6 w-6 text-sky-400" />,
    title: "Code Hunt",
    label: "Team of 4",
    description: "Follow clues, crack levels. VCODE Day morning—team of 4.",
    img: codeHuntImg,
    url: "/register/codehunt",
    registrationOpen: true,
  },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  label?: string;
  description: React.ReactNode;
  img?: string;
  url: string;
  registrationOpen?: boolean;
}

const GridItem = ({
  area,
  icon,
  title,
  label,
  description,
  img,
  url,
  registrationOpen,
}: GridItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorMap: Record<string, string> = {
    "Typing Test": "from-[#06b6d4] to-[#0891b2]",
    "Prompt Master": "from-[#8b5cf6] to-[#7c3aed]",
    "Debugging & Defend": "from-[#f59e0b] to-[#d97706]",
    "Coding Contest": "from-[#22c55e] to-[#16a34a]",
    "Technical Quiz": "from-[#3b82f6] to-[#2563eb]",
    Hackathon: "from-[#f43f5e] to-[#e11d48]",
    "Code Hunt": "from-[#06b6d4] to-[#8b5cf6]",
    "Poster Presentation": "from-[#8b5cf6] to-[#6366f1]",
  };

  return (
    <>
      <li
        className={`min-h-[18rem] md:min-h-[16rem] lg:min-h-[14rem] list-none ${area} mx-5`}
      >
        <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-2xl md:p-3 bg-[var(--card)]/50 backdrop-blur-sm group hover:border-[#06b6d4]/40 transition-all duration-300">
          <GlowingEffect
            spread={100}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border border-white/10 group-hover:border-[#06b6d4]/30 p-6 md:p-4 bg-[var(--card)]/80 transition-all duration-300 group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]">
            <div className="relative flex flex-1 flex-col justify-between gap-2">
              <div className="flex items-center justify-between">
                <div
                  className={`w-fit rounded-xl border border-white/10 bg-gradient-to-br ${colorMap[title] || "from-[#06b6d4]/20 to-[#8b5cf6]/20"} p-2.5 group-hover:border-[#06b6d4]/40 transition-all duration-300`}
                >
                  {icon}
                </div>
                <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-all duration-300">
                  <img
                    src={img}
                    alt="Event"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 pt-0.5">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#06b6d4] transition-colors">
                    {title}
                  </h3>
                  {label && (
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[0.65rem] font-medium uppercase tracking-wider text-white/90">
                      {label}
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <HeaderButton url={url} />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-2 rounded-lg border border-white/10 hover:border-[#06b6d4]/50 text-white/60 hover:text-[#06b6d4] transition-all duration-300 text-sm font-medium"
                >
                  Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>

      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={
          <>
            <p className="text-white/80">
              {eventDetails[title]?.Description ?? description}
            </p>
            <ul className="mt-3 text-sm text-white/60 space-y-2">
              {Object.entries(eventDetails[title] || {}).map(([key, value]) =>
                key === "Description" ? null : (
                  <li key={key} className="flex justify-between items-start">
                    <strong className="text-[#06b6d4]">{key}:</strong>
                    <span className="text-right">{String(value)}</span>
                  </li>
                ),
              )}
            </ul>
          </>
        }
        img={img}
      />
    </>
  );
};

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:gap-4 xl:max-h-none">
      {eventConfig.map((item) => (
        <GridItem
          key={item.title}
          area={item.area}
          icon={item.icon}
          title={item.title}
          label={item.label}
          description={item.description}
          img={item.img}
          url={item.url}
          registrationOpen={item.registrationOpen}
        />
      ))}
    </ul>
  );
}
