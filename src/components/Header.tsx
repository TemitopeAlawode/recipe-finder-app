import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/soup-logo2.png";
const Header = () => {
    const location = useLocation()// get the current location path
    return (
        <header className="sticky top-0 bg-white flex items-center justify-between shadow-xl h-header-height px-4 sm:px-10 py-2">
            {/* Image Logo & Heading */}
            <div className="flex flex-col items-center">
                <img src={logo} alt="Logo" className="w-20" />
                <h1 className="text-lg font-bold text-center whitespace-nowrap">RECIPE FINDER</h1>
            </div>
            {/* Navigation Links */}
            <div className="ml-auto space-x-5 font-bold italic">
                <Link to="/"
                    className={
                        location.pathname === "/"
                            ? "md:text-xl rounded bg-yellow-600 text-white px-4 py-2 transition duration-300 sm:px-6 sm:py-3"
                            : "md:text-xl rounded hover:bg-yellow-600 hover:text-white px-4 py-2 transition duration-300 sm:px-6 sm:py-3"
                    }
                >
                    Home
                </Link>

                <Link to="/recipes"
                    className={
                        location.pathname === "/recipes"
                            ? "md:text-xl rounded bg-yellow-600 text-white px-4 py-2 transition duration-300 sm:px-6 sm:py-3"
                            : "md:text-xl rounded hover:bg-yellow-600 hover:text-white px-4 py-2 transition duration-300 sm:px-6 sm:py-3"
                    }
                >
                    Recipes</Link>
            </div>
        </header>
    );
};

export default Header;
