import { IoWalletSharp } from "react-icons/io5";

function NavigationBar() {
  return (
    <div className="bg-white border-b-2 border-gray-800 w-full p-3 flex  md:space-x-72 items-center justify-between md:justify-around ">
      <img src="src/assets/mostlyFrens_logo.png" alt="" className="h-3" />

      <button className="flex flex-col space-y-1 w-0 mr-5 sm:hidden">
        <div className="bg-black w-5 h-1 rounded-full"></div>
        <div className="bg-black w-5 h-1 rounded-full"></div>
        <div className="bg-black w-3 h-1 rounded-full"></div>
      </button>

      <div className="space-x-5   sm:flex md:items-center hidden">
        <div className="md:flex font-semibold md:text- md:items-center text-xs tracking-tight sm:space-x-3 ">
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            MY COLLECTION
          </a>
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            FRENZONE{" "}
          </a>
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            QUESTS
          </a>
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            RAFFLES
          </a>
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            LOUNGE
          </a>
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            $SHRIMP
          </a>
          <a
            href="#"
            className="hover:text-violet-800 hover:border-b-2 hover:border-b-violet-800 transition-all"
          >
            ABOUT
          </a>
        </div>
        <button className="bg-purple-800 h-6 hover:bg-violet-600 rounded p-1 hidden md:inline-block transition-all">
          <IoWalletSharp className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
