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
            state.isLoggedIn = action.payload
            state.user = action.payload
        },
        logoutUser: (state, action) => {
            state.isLoggedIn = action.payload
            state.user = action.payload
        },
        isLoading: (state,action) => {
            state.loading = action.payload
        }

    }
})

export const {logginUser,logoutUser,isloading} = authSlice.actions
export const authSliceReducer = authSlice.reducer;