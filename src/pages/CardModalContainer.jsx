import React, { useState } from "react";
import CardList from "./CardList";
import CardModal from "../components/CardModal";

function CardModalContainer(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState(null);

  function openModal(data) {
    setIsModalOpen(true);
    setCardData(data);
    console.log("Open modal");
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  //BUG openModal prop returning undefined
  return (
    <div>
      {isModalOpen && <CardModal closeModal={closeModal} cardData={cardData} />}
      <CardList closeModal={closeModal} openModal={openModal} />
    </div>
  );
}

export default CardModalContainer;
