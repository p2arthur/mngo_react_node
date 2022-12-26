import { IoWalletSharp } from "react-icons/io5";

function NavigationBar() {
  return (
    <div className="relative">
      <div className="bg-white font-thin flex justify-between w-screen p-3 items-center z-20 border-b-4 border-black fixed left-0">
        <img src="src/assets/mostlyFrens_logo.png" alt="" className="h-3" />

        <button className="flex flex-col space-y-1 mr-5 md:hidden">
          <div className="bg-black w-5 h-1 rounded-full"></div>
          <div className="bg-black w-5 h-1 rounded-full"></div>
          <div className="bg-black w-3 h-1 rounded-full"></div>
        </button>

        <div className="space-x-5  md:flex items-center hidden mr-5">
          <div className="lg:flex font-semibold text-xs tracking-tight sm:space-x-3 border-b border-white">
            <a
              href="#"
              className="hover:text-violet-800 hover:border-b hover:border-b-violet-800 transition-all"
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
          <button className="bg-purple-800 h-6 hover:bg-violet-600 rounded p-1 transition-all">
            <IoWalletSharp className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
