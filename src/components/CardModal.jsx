import Button from "./Button";

function CardModal(props) {
  const closeModal = props.closeModal;

  console.log();
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div
          onClick={closeModal}
          className="fixed z-50 w-full h-screen bg-black/50 p-4"
        ></div>

        <div className="fixed items-center p-5 z-50 md:h-68 w-3/5 lg:w-2/5  bg-purple-600 rounded-lg">
          <div className="border-2 rounded border-white p-2 h-full w-full flex flex-col justify-center items-center space-y-2">
            <div
              onClick={closeModal}
              className="w-full h-1 text-white px-5 flex justify-end font-bold text-xl cursor-pointer"
            >
              x
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3/5 sm:w-3/6 md:w-2/6  lg:w-2/5">
                <img src={props.cardData.image} alt="" />
              </div>
              <div className="flex items-center space-x-3">
                <h2 className="text-sm sm:text-sm md:text-2xl text-white font-bold m-0">
                  {props.cardData.unity}
                </h2>
                <h3 className="m-0 text-yellow-500">
                  Level:{props.cardData.level}
                </h3>
              </div>
            </div>
            <div className="flex flex-row h-full w-full md:flex-row justify-center items-center md:space-x-5 space-x-3 md:space-y-0 ">
              <Button secondary sm>
                I Agree
              </Button>
              <Button onClick={closeModal} danger sm>
                Return
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
