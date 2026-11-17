import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="mx-auto mt-12 max-w-4xl">

      <h2 className="mb-6 text-2xl font-bold">
        🛒 Cart ({totalItems})
      </h2>

      {cart.length === 0 ? (
        <p className="rounded-lg bg-white p-6 text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-white p-6 shadow">

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span>
                ₹{totalPrice}
              </span>
            </div>

          </div>
        </>
      )}

    </div>
  );
};

export default Cart;