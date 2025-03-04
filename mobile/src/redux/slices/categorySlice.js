import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    searchTerm: '',
    filteredData: []
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer