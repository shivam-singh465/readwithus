import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchBlogsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchBlogsSuccess: (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
        },
        fetchBlogsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },


})

export const { fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure, } = blogSlice.actions;

export const blogSliceReducer = blogSlice.reducer;