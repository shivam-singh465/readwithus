import { configureStore } from "@reduxjs/toolkit";
import { blogSliceReducer } from "./blogSlice";

const store = configureStore({
  reducer: {  
    reducer: blogSliceReducer,
    },

});
export default store;
