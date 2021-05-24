import React from "react";
import "./CardModal.css";

const CardModal = ({ closeModalHandler, removeAProduct }) => {
  return (
    <div className="py-2 card__modal">
      <h5>Are you sure, you want to delete this product?</h5>
      <button
        onClick={closeModalHandler}
        type="button"
        className="btn btn-outline-success m-2"
      >
        Cancel
      </button>
      <button
        onClick={removeAProduct}
        type="button"
        className="btn btn-outline-danger m-2"
      >
        Remove
      </button>
    </div>
  );
};

export default CardModal;
