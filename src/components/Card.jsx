import { MdSpeed } from "react-icons/md";

function Card({ data }) {
  return (
    <div className="relative pb-5 px-3 py-3 bg-purple-600 lg:w-100  rounded-lg hover:shadow-lg hover:scale-105 space-y-3 duration-100">
      <div className="shadow-lg rotate-12 py-8 px-3 rounded-full text-sm bg-green-500 absolute -right-5 -top-3 z-10 text-white">
        undreamt
      </div>
      <h3 className="lg:text-md text-white font-semibold">{data.unity}</h3>
      <div className="border-4 w-full overflow-hidden border-white relative flex justify-center rounded shadow-inner">
        <div className="absolute -bottom-1 text-center bg-white  border-4 border-b-none w-1/3  rounded border-white">
          <div className=" bg-green-400 text-xs sm:text-md">
            level:{data.level}
          </div>
        </div>
        <img className="" src={data.image} alt="" />
      </div>

      <div className="bg-purple-900 rounded mt-3 pb-1">
        <div className="font-bold transition-all shadow-lg hover:shadow-none text-lg cursor-pointer active:bg-purple-700 text-purple-600 w-full h-10 text-center mx-auto flex items-center hover:-bt-1 justify-center rounded  bg-white hover:translate-y-1">
          {data.price}A
        </div>
      </div>
      <div className="my-3 h-20 border-4 md:h-1/6 items-center transition-all border-white rounded hover:inner-shadow bg-white text-purple-600 flex justify-around shadow-inner">
        {data.speed ? (
          <div className="rounded flex flex-col w-12 justify-center items-center py-1">
            <div>
              <MdSpeed />
            </div>
            <p className="font-bold text-xs text text-center leading-tight">
              1.1x speed
            </p>
          </div>
        ) : (
          "No power up"
        )}
      </div>
    </div>
  );
}
export default Card;
