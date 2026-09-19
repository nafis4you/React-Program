import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct, addToCart } from "../redux/slice.js";

const Product = () => {
    const dispatch = useDispatch();
    const { product, cart, loading, error } = useSelector(
        (state) => state.product
    );

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const totalCartItems = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    const categories = useMemo(() => {
        return [
            "All",
            ...new Set(product.map((item) => item.category)),
        ];
    }, [product]);

    const filteredProducts = product.filter((item) => {
        const searchMatch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const categoryMatch =
            category === "All" || item.category === category;
        return searchMatch && categoryMatch;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center">
                <div className="text-center">
                    <div className="h-10 w-10 mx-auto rounded-full border-4 border-gray-200 border-t-black animate-spin"></div>
                    <p className="mt-4 text-sm text-gray-500">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center max-w-md w-full">
                    <div className="w-12 h-12 mx-auto rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xl font-bold">
                        !
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-gray-900">
                        Unable to load products
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fb] text-gray-900">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-20 flex items-center justify-between gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="h-10 w-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg">
                                S
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="font-bold text-lg leading-none">Store</h1>
                                <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-widest">
                                    Collection
                                </p>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="flex-1 max-w-xl relative">
                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-gray-100 border border-transparent focus:border-gray-300 focus:bg-white outline-none rounded-xl py-3 pl-12 pr-4 text-sm transition"
                            />
                        </div>

                        {/* Cart Link button */}
                        <Link
                            to="/cart"
                            className="relative h-11 w-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition flex items-center justify-center"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                                />
                                <circle cx="10" cy="20" r="1" />
                                <circle cx="18" cy="20" r="1" />
                            </svg>
                            <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold h-5 min-w-5 px-1 rounded-full flex items-center justify-center">
                                {totalCartItems}
                            </span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <section className="mb-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                        Our collection
                    </p>
                    <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                Discover products
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-xl">
                                Explore our curated collection of quality products.
                            </p>
                        </div>
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold text-gray-900">
                                {filteredProducts.length}
                            </span>{" "}
                            products found
                        </p>
                    </div>
                </section>

                {/* Categories */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex gap-2 min-w-max">
                        {categories.map((item) => (
                            <button
                                key={item}
                                onClick={() => setCategory(item)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer ${
                                    category === item
                                        ? "bg-black text-white"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-200 py-20 text-center">
                        <h3 className="text-xl font-semibold">No products found</h3>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
                        {filteredProducts.map((item) => (
                            <article key={item.id} className="group">
                                <div className="relative aspect-[4/4.5] bg-white rounded-2xl overflow-hidden border border-gray-200">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-lg font-bold">₹{item.price}</span>
                                    </div>
                                    <button
                                        onClick={() => dispatch(addToCart(item))}
                                        className="mt-4 w-full bg-black text-white rounded-xl py-3 text-sm font-semibold hover:bg-gray-800 transition cursor-pointer"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Product;