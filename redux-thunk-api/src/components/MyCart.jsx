import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increaseItem, decreaseItem, removeFromCart } from "../redux/slice.js";

const MyCart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.product);

    // Total price calculate karne ke liye
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalItemsCount = cart.reduce(
        (total, item) => total + item.quantity, 
        0
    );

    return (
        <div className="min-h-screen bg-[#f8f9fb] text-gray-900 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
                    <Link
                        to="/"
                        className="text-sm font-semibold text-gray-600 hover:text-black transition"
                    >
                        ← Continue Shopping
                    </Link>
                </div>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-200 py-20 text-center">
                        <h3 className="text-xl font-semibold">Your cart is empty</h3>
                        <p className="text-sm text-gray-500 mt-2 mb-6">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link
                            to="/"
                            className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
                        >
                            Explore Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 flex items-center gap-4 sm:gap-6 relative"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain bg-gray-50 rounded-xl p-2 border border-gray-200 shrink-0"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-base text-gray-900 line-clamp-1">
                                                {item.title}
                                            </h3>
                                            {/* Delete / Remove Button */}
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="text-gray-400 hover:text-red-500 transition cursor-pointer p-1"
                                                title="Remove item"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <p className="text-sm font-bold text-gray-900 mt-1">
                                            ₹{item.price}
                                        </p>

                                        <div className="flex items-center gap-4 mt-4">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => dispatch(decreaseItem(item.id))}
                                                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center font-bold hover:bg-gray-100 cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span className="text-sm font-medium w-4 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(increaseItem(item.id))}
                                                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center font-bold hover:bg-gray-100 cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 h-fit">
                            <h2 className="text-lg font-bold border-b border-gray-100 pb-4">
                                Order Summary
                            </h2>
                            <div className="space-y-3 py-4 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Total Items</span>
                                    <span className="font-medium text-gray-900">{totalItemsCount}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-gray-900">₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-base mb-6">
                                <span>Total Amount</span>
                                <span>₹{totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-black text-white rounded-xl py-3.5 text-sm font-semibold hover:bg-gray-800 transition cursor-pointer">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCart;