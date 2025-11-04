import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const totalAmount = getTotalCartAmount() + deliveryFee;

  return (
    <form className="place-order">
      {/* Left Side - Delivery Info */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        {/* First Name & Last Name */}
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>

        {/* Email & Street */}
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />

        {/* City & State */}
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>

        {/* Zip & Country */}
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>

        {/* Phone */}
        <input type="text" placeholder="Phone" required />
      </div>

      {/* Right Side - Cart Totals */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : totalAmount}</p>
            </div>
          </div>
          <hr />
          <button type="submit" className="place-order-btn">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
