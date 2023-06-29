import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img className="card_img_top" src={props.image} alt={props.productName} />
      <div className="card_body">
        <h5>{props.productName}</h5>
        <p>Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          className="btn btn_primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
