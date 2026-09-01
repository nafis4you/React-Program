import React, { useReducer } from "react";

const initialstate = {
    prevCount: -1,
    count: 0,
    nextCount: 1
}

const reducer = (state, action) => {

    if (action === "increament") {
        return {
            prevCount: state.count,
            count: state.count + 1,
            nextCount: state.count + 2
        };
    }

    if (action === "decreament") {
        return {
            prevCount: state.count - 2,
            count: state.count - 1,
            nextCount: state.count
        };
    }

    return state;
};

const PrevNextReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <>
            <div className="flex flex-col gap-4 p-5 bg-gray-100 justify-center items-center">

                <span>
                    Prev: {state.prevCount}
                </span>

                <span>
                    {state.count}
                </span>

                <span>
                    Next: {state.nextCount}
                </span>

            </div>

            <div className="flex gap-4 p-5 bg-gray-100 justify-center items-center">

                <button
                    onClick={() => dispatch("decreament")}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Decrement
                </button>

                <button
                    onClick={() => dispatch("increament")}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Increment
                </button>

            </div>
        </>
    );
};

export default PrevNextReducer;