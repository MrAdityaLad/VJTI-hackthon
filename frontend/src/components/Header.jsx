import { FaSearch } from "react-icons/fa";
import { GiPistolGun} from "react-icons/gi";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineWallet } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-white flex items-center flex-shrink-0">
          <GiPistolGun className="text-white mr-2" size={24} />
          <span className="font-bold text-xl">TopGUN</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative w-3/4 sm:w-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              className="bg-gray-900 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
              placeholder="Search"
            />
          </div>
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li>
                <Link to="/marketplace" className="text-white hover:text-gray-400">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/organisation" className="text-white hover:text-gray-400">
                  Organisation
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white flex items-center">
                  <AiOutlineUser className="text-white" size={24} />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white flex items-center">
                  <AiOutlineWallet className="text-white" size={24} />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white flex items-center">
                  <AiOutlineShoppingCart className="text-white" size={24} />
                </Link>
              </li>
            </ul>
          </nav>
          <button className="sm:hidden flex items-center">
            <svg
              className="fill-current h-6 w-6 text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
