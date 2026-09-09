import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">

      <div>
        <h3 className="text-lg font-bold">
          {item.title}
        </h3>

        <p className="text-gray-600">
          ₹{item.price}
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="rounded bg-gray-200 px-3 py-1 text-lg"
        >
          -
        </button>

        <span className="font-bold">
          {item.quantity}
        </span>

        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="rounded bg-gray-200 px-3 py-1 text-lg"
        >
          +
        </button>

      </div>

      <div className="flex items-center gap-4">

        <span className="font-bold">
          ₹{item.price * item.quantity}
        </span>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default CartItem;