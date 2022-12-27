import { IoWalletSharp } from "react-icons/io5";
import UseNavigationContext from "../hooks/use-navigation-context";

import Link from "./Link";

const navLinks = [
  { label: "FRENZONE", pathName: "/frenzone" },
  { label: "MY COLLECTION", pathName: "/mycollection" },
  { label: "RAFFLES", pathName: "/raffles" },
  { label: "LOUNGE", pathName: "/lounge" },
  { label: "$SHRIMP", pathName: "/shrimp" },
  { label: "ABOUT", pathName: "/about" },
];

function NavigationBar() {
  const renderedLinks = navLinks.map((link, index) => (
    <Link to={link.pathName} key={index}>
      {link.label}
    </Link>
  ));

  return (
    <div className="relative">
      <div className="bg-white font-thin flex justify-between w-screen p-3 items-center z-20 border-b-4 border-black fixed top-0 left-0 mt-0">
        <Link to="/">
          <img src="src/assets/mostlyFrens_logo.png" alt="" className="h-5" />
        </Link>

        <button className="flex flex-col space-y-1 mr-5 md:hidden">
          <div className="bg-black w-5 h-1 rounded-full"></div>
          <div className="bg-black w-5 h-1 rounded-full"></div>
          <div className="bg-black w-3 h-1 rounded-full"></div>
        </button>

        <div className="space-x-5  md:flex items-center hidden mr-5 text-s lg:text-lg">
          <div className="lg:flex font-semibold  tracking-tight sm:space-x-3 border-b border-white">
            {renderedLinks}
          </div>
          <button className="bg-purple-800 h-6 hover:bg-violet-600 rounded p-1 transition-all">
            <IoWalletSharp className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
