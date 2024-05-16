import Searchbar from "../searchbar/Searchbar";

import logo from "../../assets/images/logo-14.png";

const Navbar = () => {
    return (
        <nav className="bg-white p-4 border-b-2 border-inherit shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <img src={logo} alt="logo ReactiveMind" className="w-[58px] h-[58px]" />
              </div>
              <div className="hidden md:block">
                <div className="ml-14 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-[16px] mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors duration-300 tracking-wider hover:text-green-900 hover:border-b-4 border-green-900"
                  >
                    HOME
                  </a>
                  <a
                    href="#"
                    className="text-[16px] font-inter font-bold text-gray-800 pb-4 transition-colors duration-300 tracking-wider hover:text-green-900 hover:border-b-4 border-green-900"
                  >
                    ABOUT
                  </a>
                </div>
              </div>
              <Searchbar />
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-white border-[1px] border-gray-800 font-inter text-gray-800 px-3 py-2 rounded-md text-sm font-medium mr-8">
                    Ingresar
                  </button>
                  <button className="bg-gray-700 text-white font-inter px-3 py-2 rounded-md text-sm font-medium">
                    Únete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
            
};

export default Navbar;
