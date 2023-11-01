import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    borderRadius: "10px",
    padding: "20px",
    width: "auto",
    height: "auto",
  };

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:border-blue-400 hover:scale-105 "
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        header={<div>Custom Header</div>}
        title="Custom Title"
        customStyles={customStyles}
        animation={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          },
        }}
        position="center"
        fullscreen={false}
      >
        <p>
          This is the content of the modal with custom styles and animation.
        </p>
      </Modal>
    </div>
  );
}

export default App;
