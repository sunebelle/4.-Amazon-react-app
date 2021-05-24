import React, { useState } from "react";
import CardModal from "../UI/CardModal";
import Modal from "../UI/Modal";

const CartItem = ({ item, dispatch }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const { id, price, title, amount, img } = item;
  const addProduct = () => {
    const addedProduct = {
      title,
      id,
      img,
      price,
      amount: 1,
    };
    dispatch({ type: "ADD", item: addedProduct });
  };
  const removeProduct = () => {
    const removedItem = {
      title,
      id,
      img,
      price,
      amount: 1,
    };
    dispatch({ type: "REMOVE", item: removedItem });
  };
  const openModalHandler = () => {
    setIsModalOpened(true);
  };
  const closeModalHandler = () => {
    setIsModalOpened(false);
  };
  const removeAProduct = () => {
    dispatch({ type: "REMOVE", item });
  };

  return (
    <>
      {isModalOpened && (
        <Modal closeModalHandler={closeModalHandler}>
          <CardModal removeAProduct={removeAProduct} closeModalHandler={closeModalHandler}/>
        </Modal>
      )}
      <div key={id} className="d-flex  justify-content-between">
        <ul className="list-group list-group-flush">
          <li className="list-group-item ps-0">
            <h6 className="m-0"> {title} </h6>
          </li>
        </ul>
        <span className="pt-2">
          <p className="d-inline pe-4"> ${price.toFixed(2)}</p>
          <button onClick={removeProduct} disabled={amount <= 1} className="">
            -
          </button>
          <span className="px-2">{amount}</span>
          <button onClick={addProduct}>+</button>
          <button
            onClick={openModalHandler}
            className="remove__btn ms-4 btn-sm btn btn-outline-danger"
          >
            X
          </button>
        </span>
      </div>
    </>
  );
};

export default CartItem;
