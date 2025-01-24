// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import selectedOptionReducer from "./selectedOptionsSlice"; // Import the selectedOption slice reducer

const store = configureStore({
  reducer: {
    selectedOption: selectedOptionReducer, // Add the slice reducer to the store
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
