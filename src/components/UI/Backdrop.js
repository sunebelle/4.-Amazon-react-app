import React from "react";
import "./Backdrop.css";

const Backdrop = ({ handleClose }) => {
  return <div onClick={handleClose} className="backdrop" />;
};

export default Backdrop;

// const Backdrop = ({ show, handleClose }) => {
//   return (
//     show && <div onClick={handleClose} className="backdrop" />
//   );
// };

// export default Backdrop;
