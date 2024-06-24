import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { getTemplateBySearch } from "../../redux/actions/templatesAction";

import Searchbar from "../searchbar/Searchbar";
import logo from "../../assets/images/logo-14.png";
// quizas aqui se podria importar y luego renderizar el componente Cart
import Cart from "../cart/Cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchString) {
      dispatch(getTemplateBySearch(searchString));
      setShowResults(true);
    }
  };

  return (
    <nav className="bg-white p-4 border-b-2 border-inherit shadow">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-start">
            <Link to="/Home">
              <img
                src={logo}
                alt="logo ReactiveMind"
                className="w-[58px] h-[58px] mr-12"
              />
            </Link>
            <Link
              to="/About"
              className="text-[16px] mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors duration-300 tracking-wider hover:text-lime-800 hover:border-b-4 border-lime-700"
            >
              ABOUT US
            </Link>
          </div>

          <Searchbar handleChange={handleChange} handleSearch={handleSearch} />

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
              <svg viewBox="0 0 22 22" width="28" height="28" fill="#4b5563">
                <path d="M19.45 15.24a.86.86 0 00.848-.719l1.69-10.14a.86.86 0 00-.848-1H4.91L4.229.65A.86.86 0 003.395 0H.858a.86.86 0 100 1.719h1.865l.673 2.696L5.07 14.45v2.6a2.553 2.553 0 00-1.69 2.4A2.552 2.552 0 005.93 22c1.744 0 2.981-1.726 2.41-3.38h7.01c-.572 1.655.667 3.38 2.41 3.38a2.552 2.552 0 002.55-2.55 2.552 2.552 0 00-2.55-2.55H6.79v-1.66zm.676-10.141l-1.404 8.422H6.658L5.254 5.099zM6.76 19.45a.832.832 0 01-1.661 0 .832.832 0 011.661 0m11 .831a.832.832 0 010-1.661.832.832 0 010 1.661"></path>
              </svg>
            </div>
          </div>
        </div>
    < Cart/>
  
      </div>
    </nav>
    
  );
};

export default Navbar;

