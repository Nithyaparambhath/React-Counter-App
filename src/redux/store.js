import counterSlice from "./counterSlice";
const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer:{
        // reducers should be key-value pair
        counter:counterSlice
    }
})