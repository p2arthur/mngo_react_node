import { MdSpeed } from "react-icons/md";

function Card() {
  return (
    <div className="m-3 px-1 py-1 w-96 sm:w-48 bg-white rounded-lg flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="border-2 border-yellow-400 p-2 rounded b">
        <h3 className="text-xs font-bold">MNGO 938</h3>
        <div className="border-4 border-violet-600 relative flex justify-center rounded shadow-inner">
          <div className="absolute text-xs -bottom-1 text-center bg-white w-14 border-4 border-b-none  rounded border-violet-600">
            <div className="bg-green-400 w-5">LVL.5</div>
          </div>
          <img className="" src="src/assets/mngo938.png" alt="" />
        </div>

        <div className="bg-purple-900 rounded mt-3 shadow-inner pb-1">
          <div className="font-bold transition-all shadow-lg hover:shadow-none cursor-pointer active:bg-purple-600 text-white w-full h-10 text-center mx-auto flex items-center  hover:-bt-1 justify-center rounded  bg-violet-600 hover:translate-y-1">
            2500A
          </div>
        </div>
        <div className=" mt-5 p-3 border-4 rounded border-violet-600 bg-violet-600 text-white flex justify-around shadow-inner">
          <div className="border-2 border-yellow-400  rounded flex flex-col w-12 justify-center items-center py-1">
            <div>
              <MdSpeed />
            </div>
            <p className="font-bold text-xs text text-center leading-tight">
              1.1x speed
            </p>
          </div>
          <div className="border-2 border-green-400  rounded flex flex-col w-12 justify-center items-center py-1">
            <div>
              <MdSpeed />
            </div>
            <p className="font-bold text-xs text text-center leading-tight">
              1.1x speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
