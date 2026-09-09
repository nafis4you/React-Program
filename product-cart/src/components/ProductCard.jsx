import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-72 rounded-xl border bg-white p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full rounded-lg object-cover"
      />

      <h2 className="mt-4 text-lg font-bold">
        {product.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {product.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold">
          ₹{product.price}
        </span>

        <button
          onClick={handleAddToCart}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;