import { useState } from "react";
import Profile from "../../components/profile/Profile";
import Billing from "../../components/billing/Billing";
import Security from "../../components/security/Security";
import Reviews from "../../components/reviews/Reviews";

const ProfilePage = () => {
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);

  const handleClick = (componente) => {
    setComponenteSeleccionado(componente);
  };

  return (
    <div className="">
      <nav className="flex items-center my-3 mx-auto max-w-6xl">
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={() => handleClick("Profile")}
        >
          PROFILE
        </button>

        <span className="border-l border-gray-300 h-10"></span>
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={() => handleClick("Billing")}
        >
          BILLING
        </button>
        <span className="border-l border-gray-300 h-10"></span>
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={() => handleClick("Security")}
        >
          SECURITY
        </button>
        <span className="border-l border-gray-300 h-10"></span>
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={() => handleClick("Reviews")}
        >
          REVIEWS
        </button>
      </nav>
      <hr className="my-4 mt-1 border-b-1 border-gray-300" />

      {componenteSeleccionado === "Profile" && <Profile />}
      {componenteSeleccionado === "Billing" && <Billing />}
      {componenteSeleccionado === "Security" && <Security />}
      {componenteSeleccionado === "Reviews" && <Reviews />}
    </div>
  );
};

export default ProfilePage;