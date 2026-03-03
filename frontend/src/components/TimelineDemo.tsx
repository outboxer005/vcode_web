import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";

// Import event images
import codeHuntImg from "@/assets/Code Hunt.png";
import codingContestImg from "@/assets/Coding Contest.png";
import debuggingDefendImg from "@/assets/Degugging&Defend.png";
import hackathonImg from "@/assets/Hackathon.png";
import posterPresentationImg from "@/assets/Poster Presentation.png";
import technicalQuizImg from "@/assets/Technical Quiz.png";
import typingTestImg from "@/assets/TypingChallenge.png";
import promptMasterImg from "@/assets/PropmtMaster.png";

export function TimelineDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (src: string): void => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const data = [
    {
      title: "Typing Test • Registration Open",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Multiple 60-second typing tests within 10 minutes. Highest WPM is
            your final score.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={typingTestImg}
              alt="Typing Test"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(typingTestImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Prompt Master",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Generate output from a given image using AI tools. Maintain complete
            prompt history.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={promptMasterImg}
              alt="Prompt Master"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(promptMasterImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Debugging & Defend",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Fix bugs in HTML, CSS, and JavaScript files to make the project work
            as required.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={debuggingDefendImg}
              alt="Debugging & Defend"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(debuggingDefendImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Poster Presentation",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Present a technical topic from CSE themes through an A4 hard copy
            poster.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={posterPresentationImg}
              alt="Poster Presentation"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(posterPresentationImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Coding Contest",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Solve programming problems using C, Python, Java, C++, or JavaScript
            within time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={codingContestImg}
              alt="Coding Contest"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(codingContestImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Technical Quiz",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Concept-based quiz covering OS, DBMS, OOPs, Algorithms, and
            Programming.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={technicalQuizImg}
              alt="Technical Quiz"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(technicalQuizImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hackathon",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Teams develop solutions for problem statements using web-based
            technologies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={hackathonImg}
              alt="Hackathon"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(hackathonImg)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Code Hunt",
      content: (
        <div>
          <p className="text-white/80 text-xl md:text-xl font-normal mb-4">
            Follow clue-based paths and solve logical challenges to reach the
            final answer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={codeHuntImg}
              alt="Code Hunt"
              width={500}
              height={500}
              className="rounded-lg object-contain h-50 md:h-44 lg:h-60 w-full cursor-pointer shadow-lg p-4"
              onClick={() => openImageModal(codeHuntImg)}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full relative">
      <Timeline data={data} />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
