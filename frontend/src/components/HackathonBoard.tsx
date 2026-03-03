import ComingSoon from "@/components/ComingSoon";

const HackathonBoard = () => {
  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">
        Hackathon Board
      </h2>
      <ComingSoon eventName="Hackathon board" />
    </div>
  );
};

export default HackathonBoard;
