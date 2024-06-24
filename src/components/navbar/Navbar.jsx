import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemplateBySearch } from "../../redux/actions/templatesAction";
import { logout } from "../../redux/actions/userAction";

import Searchbar from "../searchbar/Searchbar";
import logo from "../../assets/images/VEGA.svg";
import Cart from "../cart/Cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.loggedIn);
  const userName = useSelector((state) => state.user.userInfo.name);

  const [ searchString, setSearchString ] = useState("");
  const [ showProfileMenu, setShowProfileMenu ] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchString) {
      dispatch(getTemplateBySearch(searchString));
      setShowProfileMenu(true);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/home");
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <nav className="bg-white p-4 border-b-2 border-inherit shadow">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-start">
            <Link to="/Home">
              <img
                src={ logo }
                alt="logo ReactiveMind"
                className="w-[58px] h-[58px] mr-12 "
                style={ { fill: "green" } }
              />
            </Link>
            <Link
              to="/About"
              className="text-[16px] mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors duration-300 tracking-wider hover:text-lime-800 hover:border-b-4 border-lime-700"
            >
              NOSOTROS
            </Link>
          </div>

          <Searchbar handleChange={ handleChange } handleSearch={ handleSearch } />

          { isAuthenticated ? (
            <div className="hidden md:block relative">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative">
                  <button
                    onClick={ toggleProfileMenu }
                    className="bg-slate-800 border-[1px] border-slate-800 font-inter text-gray-800 px-3 py-2 rounded-md text-sm font-medium mr-8 flex items-center"
                  >
                    <span className="mr-2 sm:mr-4 sm:ml-0 text-white">
                      Hola, { userName }
                    </span>
                    <svg
                      className="ml-2"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9.5L10.3301 4.67957C10.6351 4.29083 10.5546 3.72205 10.1659 3.41705C9.77714 3.11206 9.20836 3.1926 8.90337 3.58134L6 7.05951L3.09663 3.58134C2.79163 3.1926 2.22285 3.11206 1.8341 3.41705C1.44536 3.72205 1.36482 4.29083 1.66982 4.67957L6 9.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  { showProfileMenu && (
                    <div className="absolute right-2 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        to="/favorites"
                        className="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mis Favoritos
                      </Link>
                      <button
                        onClick={ handleLogout }
                        className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  ) }
                </div>
                <svg
                  className="mr-8"
                  viewBox="0 0 22 20"
                  width="26"
                  height="26"
                  fill="#4b5563"
                >
                  <path d="M1.795 10.556a6.195 6.195 0 018.782-8.742l.423.424.424-.424a6.193 6.193 0 018.76 0 6.197 6.197 0 01.02 8.742l-8.404 8.9a1.1 1.1 0 01-1.6 0zM11 17.098l7.607-8.055.023-.022a3.999 3.999 0 000-5.651 3.997 3.997 0 00-5.652 0l-1.2 1.201a1.1 1.1 0 01-1.556 0L9.021 3.37A3.993 3.993 0 002.2 6.195a3.994 3.994 0 001.19 2.848z"></path>
                </svg>
                <Cart />
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link to="/SignIn">
                  <button className="bg-white border-[1px] border-slate-800 font-inter text-gray-800 px-3 py-2 rounded-md text-sm font-medium mr-8">
                    Ingresar
                  </button>
                </Link>
                <Link to="/SignUp">
                  <button className="bg-slate-800 text-white font-inter px-3 py-2  mr-8 rounded-md text-sm font-medium">
                    Únete
                  </button>
                </Link>
                <svg
                  className="mr-8"
                  viewBox="0 0 22 20"
                  width="26"
                  height="26"
                  fill="#4b5563"
                >
                  <path d="M1.795 10.556a6.195 6.195 0 018.782-8.742l.423.424.424-.424a6.193 6.193 0 018.76 0 6.197 6.197 0 01.02 8.742l-8.404 8.9a1.1 1.1 0 01-1.6 0zM11 17.098l7.607-8.055.023-.022a3.999 3.999 0 000-5.651 3.997 3.997 0 00-5.652 0l-1.2 1.201a1.1 1.1 0 01-1.556 0L9.021 3.37A3.993 3.993 0 002.2 6.195a3.994 3.994 0 001.19 2.848z"></path>

                </svg>
                <Cart />
              </div>
            </div>
          ) }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
