import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
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