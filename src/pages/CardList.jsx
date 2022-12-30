import { useState } from "react";
import Card from "../components/Card";

function CardList(props) {
  console.log("CardList props:", props);

  const mngoData = [
    {
      unity: "MNGO #12",
      image:
        "https://ipfs.algonft.tools/ipfs/QmU1Mtss6XhQ1KzSxTr1xA9N9Qu2txKZCW3inciUzhYrCh",
      price: 3500,
      level: 3,
      speed: true,
      xp: 1,
      forSale: true,
    },
    {
      unity: "MNGO #29",
      image:
        "https://ipfs.algonft.tools/ipfs/QmSw39jDwzcQWYX6ys2NDjrnxfEJz2f7g4niD7APXKqTNJ",
      price: 5000,
      level: 10,
      speed: true,
      xp: 3,
      forSale: false,
    },
    {
      unity: "MNGO #938",
      image:
        "https://ipfs.algonft.tools/ipfs/QmQeUnSCThJ2Lgmdzdx6dxhh9DyYBSWB7BNFhu78vK7j7N",
      price: 2690,
      level: 2,
      speed: true,
      xp: 3,
      forSale: true,
    },
    {
      unity: "MNGO #938",
      image: "src/assets/mngo938.png",
      price: 4204,
      level: 20,
      speed: true,
      xp: 4,
      forSale: false,
    },
    {
      unity: "MNGO #938",
      image:
        "https://ipfs.algonft.tools/ipfs/QmQeUnSCThJ2Lgmdzdx6dxhh9DyYBSWB7BNFhu78vK7j7N",
      price: 2500,
      level: 5,
      speed: true,
      xp: 3,
      forSale: true,
    },
    {
      unity: "MNGO #938",
      image: "src/assets/mngo938.png",
      price: 2500,
      level: 5,
      speed: true,
      xp: 1,
      forSale: false,
    },
    {
      unity: "MNGO #06",
      image:
        "https://ipfs.algonft.tools/ipfs/QmWeDpSr9yaARZ7YVmTE2ZTXpWF4vbtnqWYpXbmipt52ts",
      price: 2300,
      level: 5,
      speed: true,
      xp: 3,
      forSale: false,
    },
    {
      unity: "MNGO #01",
      image:
        "https://ipfs.algonft.tools/ipfs/QmeRgH3a5BYXer6X3KwEpFedTFXz8svSpfC84FvRR3MXSd",
      price: 7500,
      level: 2,
      speed: true,
      xp: 3,
      forSale: true,
    },
    {
      unity: "MNGO #938",
      image:
        "https://ipfs.algonft.tools/ipfs/QmQeUnSCThJ2Lgmdzdx6dxhh9DyYBSWB7BNFhu78vK7j7N",
      price: 2500,
      level: 5,
      speed: true,
      xp: 6,
      forSale: false,
    },
    {
      unity: "MNGO #938",
      image: "src/assets/mngo938.png",
      price: 2500,
      level: 5,
      speed: true,
      xp: 2,
      forSale: false,
    },
  ];
  //--------------------------------------------------------------------------

  //BUG openModal prop does not exist
  const RenderedCards = mngoData.map((card, index) => (
    <Card key={index} card={card} openModal={props.openModal} />
  ));

  //--------------------------------------------------------------------------
  return (
    <div>
      <div className="flex-col py-5 min-h-screen items-center bg-cyan-50 text-xl 2xl:text-5xl">
        <div className="flex flex-col items-center justify-start space-y-10 p-10">
          <div className="">
            <h3 className="md:text-xl text-purple-400 font-extrabold text-2xl">
              BALANCE:{" "}
              <span className="text-orange-400 md:text-3xl text-2xl">
                369🍤
              </span>
            </h3>
            <h2 className="md:text-5xl text-2xl font-bold text-teal-400">
              THE FRENZONE
            </h2>
            <h3 className="md:text-2xl text-lg text-purple-400 font-bold lg:leading-6 leading-4">
              The Frenzone is a directory of Yieldlings and M.N.G.O listed on
              secondary marketplaces that haven't dreamt their Mostly Frens.
              Purchasing one of these berds will allow you to be the one to
              dream their fren. Check the Directory to view Berds that are not
              listed.
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
            {RenderedCards}
          </div>
        </div>
      </div>
      <div className="p-5 bg-black text-white flex items-center justify-between">
        <div className="flex flex-col items-center">
          <img
            src="src/assets/mostlyFrens_logo.png"
            alt=""
            className="bg-white rounded-full w-16"
          />
          mostly frens
        </div>
        All rights reserveds
      </div>
    </div>
  );
}

export default CardList;
