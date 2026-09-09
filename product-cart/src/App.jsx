import React from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 50000,
    description: "Powerful laptop for work and study.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "Smartphone",
    price: 25000,
    description: "Latest smartphone with great features.",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: "Headphones",
    price: 3000,
    description: "Wireless headphones with clear sound.",
    image: "https://picsum.photos/400/300?random=3",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-center text-3xl font-bold">
        My Shopping Cart
      </h1>

      {/* Products */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Cart */}
      <Cart />

    </div>
  );
};

export default App;