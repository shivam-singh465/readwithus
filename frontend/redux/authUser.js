import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authUser",
    initialState: {
        user: null,
        isLoggedIn: false,
        loading: false,
    },
    reducers: {
        logginUser: (state, action) => {
            state.user = action.payload;          // user object
            state.isLoggedIn = true;              // user is logged in
        },
        logoutUser: (state) => {
            state.user = null;                    // clear user
            state.isLoggedIn = false;             // set login status
        },
        isLoading: (state, action) => {
            state.loading = action.payload;       // true or false
        },
    },
});

export const { logginUser, logoutUser, isLoading } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
