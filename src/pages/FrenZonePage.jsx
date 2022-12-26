import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";
import { useState } from "react";

const mngoData = [
  {
    unity: "MNGO #12",
    image:
      "https://ipfs.algonft.tools/ipfs/QmU1Mtss6XhQ1KzSxTr1xA9N9Qu2txKZCW3inciUzhYrCh",
    price: 3500,
    level: 3,
    speed: false,
    xp: true,
  },
  {
    unity: "MNGO #29",
    image:
      "https://ipfs.algonft.tools/ipfs/QmSw39jDwzcQWYX6ys2NDjrnxfEJz2f7g4niD7APXKqTNJ",
    price: 2500,
    level: 10,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #938",
    image:
      "https://ipfs.algonft.tools/ipfs/QmQeUnSCThJ2Lgmdzdx6dxhh9DyYBSWB7BNFhu78vK7j7N",
    price: 2500,
    level: 2,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #938",
    image: "src/assets/mngo938.png",
    price: 2500,
    level: 20,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #938",
    image:
      "https://ipfs.algonft.tools/ipfs/QmQeUnSCThJ2Lgmdzdx6dxhh9DyYBSWB7BNFhu78vK7j7N",
    price: 2500,
    level: 5,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #938",
    image: "src/assets/mngo938.png",
    price: 2500,
    level: 5,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #06",
    image:
      "https://ipfs.algonft.tools/ipfs/QmWeDpSr9yaARZ7YVmTE2ZTXpWF4vbtnqWYpXbmipt52ts",
    price: 2300,
    level: 5,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #01",
    image:
      "https://ipfs.algonft.tools/ipfs/QmeRgH3a5BYXer6X3KwEpFedTFXz8svSpfC84FvRR3MXSd",
    price: 7500,
    level: 2,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #938",
    image:
      "https://ipfs.algonft.tools/ipfs/QmQeUnSCThJ2Lgmdzdx6dxhh9DyYBSWB7BNFhu78vK7j7N",
    price: 2500,
    level: 5,
    speed: true,
    xp: true,
  },
  {
    unity: "MNGO #938",
    image: "src/assets/mngo938.png",
    price: 2500,
    level: 5,
    speed: true,
    xp: true,
  },
];

function FrenZonePage() {
  const [data, setUpData] = useState(mngoData);
  const RenderedCards = data.map((object, index) => (
    <Card key={index} data={object} />
  ));
  return (
    <div className="flex flex-col min-h-screen items-center bg-cyan-50">
      <NavigationBar />
      <div className="mt-12 flex flex-col items-start justify-center px-10 space-y-10">
        <div>
          <h3 className="mt-10 text-3xl text-purple-400 font-extrabold">
            BALANCE: <span className="text-orange-400">369🍤</span>
          </h3>
          <h2 className="text-5xl font-bold text-teal-400">THE FRENZONE</h2>
          <h3 className="text-2xl text-purple-400 font-bold leading-6">
            The Frenzone is a directory of Yieldlings and M.N.G.O listed on
            secondary marketplaces that haven't dreamt their Mostly Frens.
            Purchasing one of these berds will allow you to be the one to dream
            their fren. Check the Directory to view Berds that are not listed.
          </h3>
        </div>
        <div className="grid grid-row-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {RenderedCards}
        </div>
      </div>
    </div>
  );
}

export default FrenZonePage;
