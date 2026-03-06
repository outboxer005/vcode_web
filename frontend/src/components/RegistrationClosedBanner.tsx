import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationClosedBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate();

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-lg p-4 flex flex-col items-center gap-2">
      <h2 className="text-xl font-semibold text-red-600 text-center">
        Registration has been closed and the details of participants will be
        announced soon.
      </h2>
      <button
        onClick={() => navigate("/register/quiz")}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Open Technical Quiz Registration
      </button>
      <button
        onClick={() => setShowBanner(false)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Dismiss
      </button>
    </div>
  );
};

export default RegistrationClosedBanner;
