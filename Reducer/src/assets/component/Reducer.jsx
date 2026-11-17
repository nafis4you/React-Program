import React, { useReducer } from "react";

const reducer = (state, action) => {
    if (action === "increament") {
        return state + 1;
    }

    if (action === "decreament") {
        return state - 1;
    }

    return state;
};

const Reducer = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="flex gap-4 p-5 bg-gray-100 justify-center item-center">

            <button
                onClick={() => dispatch("decreament")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Decreament
            </button>

            <span className="flex justify-center items-center">{count}</span>

            <button
                onClick={() => dispatch("increament")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Increament
            </button>

        </div>
    );
};

export default Reducer;