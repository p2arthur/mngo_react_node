import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, actionBar, children }) {
  const handleCloseClick = () => {
    onClose();
  };

  useEffect(() => {
    const body = document.body;
    body.classList.add("overflow-hidden");

    return () => body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={handleCloseClick}
        className="fixed inset-0 bg-black opacity-80 z-10"
      ></div>
      <div className="fixed inset-10 p-10 bg-purple-500 z-20 h-96 rounded-lg mt-20">
        <div className=" text-white flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
