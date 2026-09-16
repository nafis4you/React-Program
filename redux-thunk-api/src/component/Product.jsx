import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slice.js";

const Product = () => {
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(
        (state) => state.product
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
        <div>
            <h1>Products</h1>

            {product.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>

                    <p>Price: ₹{item.price}</p>

                    <button>Add</button>
                </div>
            ))}
        </div>
    );
};

export default Product;