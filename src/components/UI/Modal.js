import React from "react";
// import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = ({ closeModalHandler }) => {
  return <div onClick={closeModalHandler} className="backdrop" />;
};
const ModalOverlay = ({ children }) => {
  return <div className="modaling">{children}</div>;
};

const Modal = ({ children, closeModalHandler }) => {
  return (
    <>
      <Backdrop closeModalHandler={closeModalHandler} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
// const Modal = ({children, closeModalHandler}) => {
//   const modalEl = document.getElementById("overlay");
//   return (
//     <>
//       {ReactDOM.createPortal(<Backdrop closeModalHandler={closeModalHandler}/>, modalEl)}
//       {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, modalEl)}
//     </>
//   );
// };

// export default Modal;
