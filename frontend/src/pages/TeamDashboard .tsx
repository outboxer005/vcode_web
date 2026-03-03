import ComingSoon from "@/components/ComingSoon";

const TeamListPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-[var(--background)]">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent text-center">
        Teams
      </h2>
      <ComingSoon eventName="Team list" />
    </div>
  );
};

export default TeamListPage;
