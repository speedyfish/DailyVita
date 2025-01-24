// src/redux/selectedOptionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedOptionState {
  answers: Record<string, string>; // Dictionary to store answers for each question
}

const initialState: SelectedOptionState = {
  answers: {},
};

const selectedOptionSlice = createSlice({
  name: "selectedOption",
  initialState,
  reducers: {
    setSelectedOption(
      state,
      action: PayloadAction<{ question: string; answer: string }>
    ) {
      const { question, answer } = action.payload;
      state.answers[question] = answer; 
    },
  },
});

export const { setSelectedOption } = selectedOptionSlice.actions;

export default selectedOptionSlice.reducer;

