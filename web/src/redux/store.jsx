import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from './productSlice';
import categorySlice from './categorySlice';
import userSlice from './userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        category: categorySlice,
        user: userSlice
    }
});

export default store;