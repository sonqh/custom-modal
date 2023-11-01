import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalProps } from "../interface/components/IModal";
import { CustomAnimation } from "../interface/config/IAnimation";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  title,
  customStyles,
  animation,
  position,
  children,
  fullscreen = false,
}) => {
  const defaultAnimation: CustomAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  const validPosition = position || "center";

  const positionStyles = {
    top: validPosition === "top" ? "items-start" : "",
    left: validPosition === "left" ? "justify-start" : "",
    right: validPosition === "right" ? "justify-end" : "",
    bottom: validPosition === "bottom" ? "items-end" : "",
    center: validPosition === "center" ? "items-center justify-center" : "",
  };

  const modalStyles = {
    inset: fullscreen ? 0 : undefined,
    ...positionStyles,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...(animation || defaultAnimation)}
          style={modalStyles}
          className={`fixed z-50 bg-black bg-opacity-50 w-full h-full flex ${positionStyles[validPosition]}`}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className={`bg-white p-6 rounded-lg shadow-lg ${
              fullscreen ? "w-screen h-screen" : ""
            }`}
            style={customStyles}
            onClick={(e) => e.stopPropagation()}
          >
            {header && <div className="mb-4">{header}</div>}
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            {children}
            <button
              onClick={onClose}
              className="mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400 transform hover:scale-105 transition-transform"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
