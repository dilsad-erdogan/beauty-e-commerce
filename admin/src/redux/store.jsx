import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        order: orderSlice,
        product: productSlice,
        category: categorySlice,
    }
});

export default store;