import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import serviceSlice from "./serviceSlice";

const store = configureStore({
    reducer: {
        order: orderSlice,
        product: productSlice,
        category: categorySlice,
        service: serviceSlice
    }
});

export default store;