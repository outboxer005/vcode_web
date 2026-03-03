import ComingSoon from "@/components/ComingSoon";

const HackathonForm = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Hackathon Registration</h2>
      <ComingSoon eventName="Hackathon" description="Registration will open later. Check the Events page for updates." />
    </div>
  );
};

export default HackathonForm;
