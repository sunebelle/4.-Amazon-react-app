import React, { useState } from "react";

const Delivery = () => {
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const { name, address, phone, email } = customer;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ customer, [name]: value, id: Date.now() });
  };
  return (
    <div className="container-fluid">
      <form>
        <div className="input__value">
          <label>Your Name </label>
          <input
            type="text"
            value={name}
            required
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="input__value">
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            value={phone}
            required
            min="9"
            onChange={handleChange}
          />
        </div>
        <div className="input__value">
          <label> email </label>
          <input
            type="email"
            required
            onChange={handleChange}
            value={email}
            min="6"
            name="email"
          />
        </div>
        <div className="input__value">
          <label> Address </label>
          <input
            type="text"
            required
            onChange={handleChange}
            value={address}
            name="address"
          />
        </div>
        <button>Confirm</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default Delivery;
