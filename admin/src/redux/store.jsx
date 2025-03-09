import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        order: orderSlice,
        product: productSlice
    }
});

export default store;