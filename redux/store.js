// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import selectedOptionReducer from "./selectedOptionsSlice"; // Import the selectedOption slice reducer

const store = configureStore({
  reducer: {
    selectedOption: selectedOptionReducer, // Add the slice reducer to the store
  },
});

export default store;
