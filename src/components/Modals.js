import { useState } from "react";

const ModalWindow = () => {
  return (
    <div id="modal">
      <h2>Modal</h2>
      <p>Hey man I popped up, whats up?</p>
    </div>
  );
};

const Modals = () => {
  const [modalIsOpen, triggerModal] = useState(false);

  const toggleModal = () => {
    // console.log(modalIsOpen);
    // putting an exclamation mark before a boolean value tells it to flip from true to flase or vice versa
    triggerModal(!modalIsOpen);
  };

  return (
    <div className="section">
      <h2>React Modals</h2>
      <p>This modal uses useState to render on the screen.</p>
      <button onClick={toggleModal}>Toggle Modal</button>
      {modalIsOpen && <ModalWindow />}
    </div>
  );
};

export default Modals;
