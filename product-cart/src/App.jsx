import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 50000,
    description: "Powerful laptop for work and study.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 2,
    title: "Smartphone",
    price: 25000,
    description: "Latest smartphone with great features.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 3,
    title: "Headphones",
    price: 3000,
    description: "Wireless headphones with clear sound.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-center text-3xl font-bold">
        My Shopping Cart
      </h1>

      {/* Products */}
      <Products products={products} />

      {/* Cart */}
      <Cart />

    </div>
  );
};

export default App;