// src/redux/selectedOptionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: {}, // To store answers for each question
};

const selectedOptionSlice = createSlice({
  name: "selectedOption",
  initialState,
  reducers: {
    setSelectedOption(state, action) {
      const { question, answer } = action.payload;
      state.answers[question] = answer; // Store the answer for a specific question
    },
  },
});

// Export the action creator
export const { setSelectedOption } = selectedOptionSlice.actions;

// Export the reducer to be used in the store
export default selectedOptionSlice.reducer;
