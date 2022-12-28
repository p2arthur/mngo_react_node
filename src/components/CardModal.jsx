function CardModal(props) {
  console.log();
  return (
    <div className="fixed z-50 w-full h-full bg-black/50 p-4">
      <h1 className="absolute inset-20 h-3/4 p-10 bg-white">
        {props.cardData.unity}
      </h1>
    </div>
  );
}

export default CardModal;
