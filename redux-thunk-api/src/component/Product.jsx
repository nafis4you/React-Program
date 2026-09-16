import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slice,js";
import { useEffect } from "react";

const Products = () => {

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.Product
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>Products</h1>

      {products.map((product) => (
        <p key={product.id}>
          {product.firstName} {product.lastName}
        </p>
      ))}
    </>
  );
};

export default Products;