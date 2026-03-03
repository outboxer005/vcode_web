import React from "react";
import {
  Users,
  Code2,
  Brain,
  Presentation as PresentationScreen,
  Terminal,
} from "lucide-react";

interface Volunteer {
  name: string;
  role: string;
  email: string;
  phone: string;
}

interface EventSection {
  name: string;
  icon: React.ReactNode;
  volunteers: Volunteer[];
  color: string;
}

function Contact() {
  const eventSections: EventSection[] = [
    {
      name: "Typing Test",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-purple-600 to-indigo-600",
      volunteers: [
        {
          name: "Naresh Goli",
          role: "Core Organizer",
          email: "231fa04165@vignan.ac.in",
          phone: "7093976017",
        },
        {
          name: "B.Ramana",
          role: "Lead Organizer",
          email: "231fa04a56@vignan.ac.in",
          phone: "9398080020",
        },
        {
          name: "Bala Ganesh",
          role: "Lead Organizer",
          email: "231fa04e14@vignan.ac.in",
          phone: "9966036218",
        },
        {
          name: "Gautam Kumar",
          role: "Lead Organizer",
          email: "231fa04f57@vignan.ac.in",
          phone: "8092731451",
        },
        {
          name: "Reshmitha Srihasini",
          role: "Chief Coordinator",
          email: "241fa04928@vignan.ac.in",
          phone: "6304320285",
        },
      ],
    },
    {
      name: "Coding Contest",
      icon: <Terminal className="w-8 h-8" />,
      color: "from-red-600 to-orange-600",
      volunteers: [
        {
          name: "Suma Likhitha",
          role: "Core Organizer",
          email: "231fa04c22@vignan.ac.in",
          phone: "6281531343",
        },
        {
          name: "Bala Ganesh",
          role: "Lead Organizer",
          email: "231fa04e14@vignan.ac.in",
          phone: "9966036218",
        },
        {
          name: "Kunal Kumar",
          role: "Lead Organizer",
          email: "231fa04g22@vignan.ac.in",
          phone: "9905573921",
        },
        {
          name: "Asrith Nalluri",
          role: "Lead Organizer",
          email: "231fa04255@vignan.ac.in",
          phone: "8919117794",
        },
        {
          name: "Ch Meghana",
          role: "Chief Coordinator",
          email: "241fa04911@vignan.ac.in",
          phone: "9346153165",
        },
      ],
    },
    {
      name: "Debugging & Defend",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      volunteers: [
        {
          name: "Venkata Sai",
          role: "Core Organizer",
          email: "231fa04g32@vignan.ac.in",
          phone: "8520062068",
        },
        {
          name: "B.Ramana",
          role: "Lead Organizer",
          email: "231fa04a56@vignan.ac.in",
          phone: "9398080020",
        },
        {
          name: "Mujamil Shaik",
          role: "Lead Organizer",
          email: "231fa04138@vignan.ac.in",
          phone: "6303305446",
        },
        {
          name: "Piyush Choudhary",
          role: "Lead Organizer",
          email: "231fa04641@vignan.ac.in",
          phone: "6203119477",
        },
        {
          name: "Alekhya Obineni",
          role: "Chief Coordinator",
          email: "241fa04947@vignan.ac.in",
          phone: "6302103608",
        },
      ],
    },
    {
      name: "Prompt Master",
      icon: <PresentationScreen className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      volunteers: [
        {
          name: "Naresh Goli",
          role: "Core Organizer",
          email: "231fa04165@vignan.ac.in",
          phone: "7093976017",
        },
        {
          name: "Gopi Krishna",
          role: "Lead Organizer",
          email: "231fa04310@vignan.ac.in",
          phone: "9392142437",
        },
        {
          name: "Asrith",
          role: "Lead Organizer",
          email: "231fa04255@vignan.ac.in",
          phone: "8919117794",
        },
        {
          name: "Vikash Kumar",
          role: "Lead Organizer",
          email: "231fa04f67@vignan.ac.in",
          phone: "7209254340",
        },
        {
          name: "P Lakshya",
          role: "Chief Coordinator",
          email: "241fa04926@vignan.ac.in",
          phone: "6304809112",
        },
      ],
    },
    {
      name: "Technical Quiz",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-600 to-rose-600",
      volunteers: [
        {
          name: "Lokya Lochana",
          role: "Core Organizer",
          email: "231fa04f97@vignan.ac.in",
          phone: "7729961222",
        },
        {
          name: "Anvitha Boppana",
          role: "Lead Organizer",
          email: "231fa04168@vignan.ac.in",
          phone: "9390783737",
        },
        {
          name: "Vasanta Lakshmi",
          role: "Lead Organizer",
          email: "231fa04244@vignan.ac.in",
          phone: "9949528256",
        },
        {
          name: "Irfana Bano",
          role: "Lead Organizer",
          email: "231fa04326@vignan.ac.in",
          phone: "8919552372",
        },
        {
          name: "Subba Reddy",
          role: "Chief Coordinator",
          email: "241fa04b47@vignan.ac.in",
          phone: "8367668555",
        },
      ],
    },
    {
      name: "Poster Presentation",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-amber-600 to-yellow-600",
      volunteers: [
        {
          name: "Giri Nihitha",
          role: "Core Organizer",
          email: "231fa04251@vignan.ac.in",
          phone: "6302768819",
        },
        {
          name: "Vasanta Lakshmi",
          role: "Lead Organizer",
          email: "231fa04244@vignan.ac.in",
          phone: "9949528256",
        },
        {
          name: "Irfana Bano",
          role: "Lead Organizer",
          email: "231fa04326@vignan.ac.in",
          phone: "8919552372",
        },
        {
          name: "Gautam Kumar",
          role: "Lead Organizer",
          email: "231fa04f57@vignan.ac.in",
          phone: "8092731451",
        },
        {
          name: "Ch Meghana",
          role: "Chief Coordinator",
          email: "241fa04911@vignan.ac.in",
          phone: "9346153165",
        },
      ],
    },
    {
      name: "Code Hunt",
      icon: <Terminal className="w-8 h-8" />,
      color: "from-cyan-600 to-blue-600",
      volunteers: [
        {
          name: "Naresh Goli",
          role: "Core Organizer",
          email: "231fa04165@vignan.ac.in",
          phone: "7093976017",
        },
        {
          name: "Venkata Sai",
          role: "Core Organizer",
          email: "231fa04g32@vignan.ac.in",
          phone: "8520062068",
        },
        {
          name: "Irfana Bano",
          role: "Lead Organizer",
          email: "231fa04326@vignan.ac.in",
          phone: "8919552372",
        },
        {
          name: "Gopi Krishna",
          role: "Lead Organizer",
          email: "231fa04310@vignan.ac.in",
          phone: "9392142437",
        },
        {
          name: "Alekhya Obineni",
          role: "Chief Coordinator",
          email: "241fa04947@vignan.ac.in",
          phone: "6302103608",
        },
      ],
    },
    {
      name: "Hackathon",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      volunteers: [
        {
          name: "Giri Nihitha",
          role: "Core Organizer",
          email: "231fa04251@vignan.ac.in",
          phone: "6302768819",
        },
        {
          name: "Kunal Kumar",
          role: "Lead Organizer",
          email: "231fa04g22@vignan.ac.in",
          phone: "9905573921",
        },
        {
          name: "Nitish Kumar",
          role: "Lead Organizer",
          email: "231fa04f55@vignan.ac.in",
          phone: "7258888230",
        },
        {
          name: "Sujith Kumar",
          role: "Lead Organizer",
          email: "231fa04e34@vignan.ac.in",
          phone: "8002543444",
        },
        {
          name: "K.Namitha",
          role: "Chief Coordinator",
          email: "241fa04380@vignan.ac.in",
          phone: "7569917001",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#f43f5e] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Meet Our Dedicated Team Making Technical Excellence Happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventSections.map((section, index) => (
            <div
              key={section.name}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-fadeInUp"
              style={{ opacity: 0, animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative bg-[#0d1117] border border-white/10 group-hover:border-[#8b5cf6]/40 rounded-2xl p-6 transition-all duration-300 h-full flex flex-col shadow-xl shadow-black/20">
                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] mb-4 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
                    {section.icon}
                  </div>

                  <h2 className="text-xl font-bold text-white text-center">
                    {section.name}
                  </h2>
                </div>

                <div className="space-y-3 flex-1">
                  {section.volunteers.map((volunteer) => (
                    <div
                      key={volunteer.email}
                      className="bg-[#161b22] border border-white/10 rounded-xl p-4 hover:border-[#8b5cf6]/50 hover:bg-[#1c2128] transition-all duration-300"
                    >
                      <h3 className="font-bold text-lg text-white">
                        {volunteer.name}
                      </h3>
                      <p className="text-sm text-white/50 mt-1">
                        {volunteer.role}
                      </p>
                      <a
                        href={`mailto:${volunteer.email}`}
                        className="text-sm text-[#60a5fa] mt-2 block hover:underline"
                      >
                        {volunteer.email}
                      </a>
                      <p className="text-sm text-white/40 mt-1">
                        {volunteer.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
