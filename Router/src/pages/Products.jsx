import { useParams, useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <h1>Products Page</h1>
      <p><b>Products category:</b> {category}</p>
    </>  
)

};

export default Products;