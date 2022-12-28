import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage({ isOpen, handleClick }) {
  const [showModal, setShowModal] = useState(isOpen);

  console.log(handleClick);
}

export default ModalPage;
