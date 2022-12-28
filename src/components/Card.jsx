import { MdSpeed } from "react-icons/md";
import Button from "./Button";

function Card(props) {
  return (
    <div className="relative px-3 pb-3 py-0 bg-purple-600 lg:w-100  rounded-lg hover:shadow-lg hover:scale-105 space-y-3 duration-100">
      <div className="shadow-lg rotate-12 py-8 px-3 rounded-full text-sm bg-green-500 absolute -right-5 -top-3 z-10 text-white">
        undreamt
      </div>
      <div className="h-4">
        <h3 className="lg:text-md text-white font-semibold ">
          {props.card.unity}
        </h3>
      </div>
      <div className="border-4 w-full overflow-hidden border-white relative flex justify-center rounded shadow-inner">
        <div className="absolute -bottom-1 text-center bg-white h-7 border-b-purple-500 border-4 border-b-none w-20 rounded border-white">
          <div
            className={`bg-purple-600 h-10 w-${props.card.xp}/6 justify-center text-xs sm:text-md`}
          >
            <div className="text-white text-lg leading-3 absolute top-1 left-3 font-bold">
              level:{props.card.level}
            </div>
          </div>
        </div>
        <img className="" src={props.card.image} alt="" />
      </div>
      {props.card.forSale ? (
        //BUG openModal prop does not exist
        <Button onClick={() => props.openModal(props.card)} secondary>
          {props.card.price}A
        </Button>
      ) : (
        <Button inactive>{props.price}NOT FOR SALE</Button>
      )}

      <div className="h-20 border-4  items-center transition-all border-white  rounded  bg-white text-purple-600 flex justify-between shadow-inner ">
        {props.card.speed ? (
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
  );
}
export default Card;
