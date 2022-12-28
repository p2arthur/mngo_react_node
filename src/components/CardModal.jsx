function CardModal(props) {
  const closeModal = props.closeModal;
  return (
    <div>
      <div
        onClick={closeModal}
        className="fixed z-50 w-full h-full bg-black/50 p-4"
      ></div>
      <div>
        <h1 className="fixed z-50 inset-20 h-3/4 p-10 bg-white">
          {props.cardData.unity}
        </h1>
      </div>
    </div>
  );
}

export default CardModal;
