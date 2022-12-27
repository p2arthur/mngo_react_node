import { MdSpeed } from "react-icons/md";

function Card({ data }) {
  return (
    <div className="relative px-3 py-1 bg-purple-600 lg:w-100  rounded-lg hover:shadow-lg hover:scale-105 space-y-0 duration-100">
      <div className="shadow-lg rotate-12 py-8 px-3 rounded-full text-sm bg-green-500 absolute -right-5 -top-3 z-10 text-white">
        undreamt
      </div>
      <h3 className="lg:text-md text-white font-semibold ">{data.unity}</h3>
      <div className="border-4 w-full overflow-hidden border-white relative flex justify-center rounded shadow-inner">
        <div className="absolute -bottom-1 text-center bg-white h-6 border-4 border-b-none w-14 rounded border-white">
          <div
            className={`bg-green-400 h-6 w-${data.xp}/6 justify-center text-xs sm:text-md`}
          >
            <div className="flex justify-center w-12">level:{data.level}</div>
          </div>
        </div>
        <img className="" src={data.image} alt="" />
      </div>

      <div className="h-50">
        <div className="bg-purple-900 rounded mt-3 pb-1">
          <div className="font-bold hover:shadow-inner duration-75 shadow-lg  text-lg cursor-pointer active:bg-green-400 text-white w-full h-10 text-center mx-auto flex items-center hover:-bt-1 justify-center rounded  bg-sky-400 hover:bg-sky-500 hover:translate-y-1">
            {data.price}A
          </div>
        </div>
        <div className="my-3 h-20 border-4  items-center transition-all border-white  rounded  bg-white text-purple-600 flex justify-between shadow-inner ">
          {data.speed ? (
            <div className="rounded flex flex-col w-20 justify-center items-center py-1 md:text-3xl -3">
              <div>
                <MdSpeed />
              </div>
              <p className="font-bold text-sm text text-center flex  justify-between w-14">
                1.1x <span>speed</span>
              </p>
            </div>
          ) : (
            "No power up"
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
