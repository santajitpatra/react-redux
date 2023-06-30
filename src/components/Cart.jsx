import React from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartSlice";

const Cart = () => {
  const item = useSelector(getItemSelector);
  const total = item.reduce((a, b) => a + b.price, 0);

  return (
    <div className="cart">
      <h3>
        Total Item: {item.length} (Rs. {total})
      </h3>
    </div>
  );
};

export default Cart;
