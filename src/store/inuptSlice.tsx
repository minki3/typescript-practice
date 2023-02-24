import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  [key: string]: number;
}

const initialState: InputState = {};

const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    input: (state, action: PayloadAction<InputState>) => {
      return action.payload;
    },
  },
});

export default inputSlice.reducer;
export const inputSliceAction = inputSlice.actions;
