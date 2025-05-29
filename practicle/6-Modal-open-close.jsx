import { useState } from "react";

const ModalComponent = ({ handleCloseModal }) => {
  return (
    <div>
      <p>Modal Open</p>
      <button onClick={handleCloseModal}>Close Modal</button>
    </div>
  );
};

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isModalOpen && <ModalComponent handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default Modal;
