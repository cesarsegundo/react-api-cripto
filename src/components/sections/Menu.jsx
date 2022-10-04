import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className=" border-b border-gray-200 px-2  py-2.5 bg-gray-900 sticky top-0 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <Link to="/" className="flex items-center">
          <img className="w-10 mr-2" src="/criptomonedas.png" alt="" />

          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Criptomonedas
          </span>
        </Link>
        <div className="">
          <ul className="flex p-4 mt-4 rounded-lg flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium border-0   bg-gray-900 ">
            <li>
              <NavLink
                to="/"
                className="block py-2 pr-4 pl-3 rounded  md:border-0 md:p-0 text-base  text-gray-300 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/criptomonedas"
                className="block py-2 pr-4 pl-3 rounded  md:border-0 md:p-0 text-base  text-gray-300 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Criptomonedas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
