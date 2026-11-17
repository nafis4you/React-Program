import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-center text-3xl font-bold">
        My Shopping Cart
      </h1>

      {/* Products */}
      <Products />

      {/* Cart */}
      <Cart />

    </div>
  );
};

export default App;