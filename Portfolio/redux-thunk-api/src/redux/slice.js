import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async () => {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        return data.products;
    }
);

const initialState = {
    product: [],
    cart: [], // Cart state add kiya hai
    loading: false,
    error: null,
};

const slice = createSlice({
    name: "product",
    initialState,

    reducers: {
        // Add to cart reducer
        addToCart: (state, action) => {
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },

        increaseItem: (state, action) => {
            const item = state.cart.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseItem: (state, action) => {
            const item = state.cart.find(
                (item) => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state) => {
                state.loading = false;
                state.error = "Something went wrong";
            });
    },
});

export const { addToCart, removeFromCart, increaseItem, decreaseItem } = slice.actions;

export default slice.reducer;