import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from './slices/productSlice';
import categorySlice from './slices/categorySlice';
import serviceSlice from './slices/serviceSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        service: serviceSlice,
        category: categorySlice,
        user: userSlice
    }
});

export default store;