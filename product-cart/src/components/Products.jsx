import React from "react";
import ProductCard from "./ProductCard";

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

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;