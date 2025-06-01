import { configureStore } from "@reduxjs/toolkit";
import { blogSliceReducer } from "./blogSlice";
import { authSliceReducer } from "./authUser";

const store = configureStore({
  reducer: {  
    blogReducer: blogSliceReducer,
    userReducer: authSliceReducer,
    },

});
export default store;
