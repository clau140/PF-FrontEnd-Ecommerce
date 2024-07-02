import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Profile from "../../components/profile/Profile";
import Billing from "../../components/billing/Billing";
import Security from "../../components/security/Security";
import UserReviews from "../../components/reviews/UserReviews";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [ componenteSeleccionado, setComponenteSeleccionado ] = useState(null);
  const userInfo = useSelector(state => state.user.userInfo)


  const handleClick = (componente) => {
    setComponenteSeleccionado(componente);
  };

  return (
    <div className="">
      <nav className="flex items-center my-3 mx-auto max-w-6xl">
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={ () => handleClick("Profile") }
        >
          PERFIL
        </button>

        <span className="border-l border-gray-300 h-10"></span>
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={ () => handleClick("Billing") }
        >
          HISTORIAL DE PAGOS
        </button>
        <span className="border-l border-gray-300 h-10"></span>
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={ () => handleClick("Security") }
        >
          SEGURIDAD
        </button>
        <span className="border-l border-gray-300 h-10"></span>
        <button
          className="flex-1 text-center font-inter font-semibold text-gray-800"
          onClick={ () => handleClick("Reviews") }
        >
          RESEÑAS
        </button>
      </nav>
      <hr className="my-4 mt-1 border-b-1 border-gray-300" />

      { componenteSeleccionado === "Profile" && <Profile /> }
      { componenteSeleccionado === "Billing" && <Billing orders={userInfo.orders} /> }
      { componenteSeleccionado === "Security" && <Security /> }
      { componenteSeleccionado === "Reviews" && <UserReviews /> }
    </div>
  );
};

export default ProfilePage;
