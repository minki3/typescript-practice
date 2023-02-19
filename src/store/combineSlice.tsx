import { createSlice } from "@reduxjs/toolkit";

interface CounterSlice {
  curCounter: number;
}

const initialState = {
  curCounter: 0,
} as CounterSlice;

const combineSlice = createSlice({
  name: "combineSlice",
  initialState,
  reducers: {
    plus: (state) => {
      state.curCounter = state.curCounter + 1;
    },
    minus: (state) => {
      state.curCounter = state.curCounter - 1;
    },
  },
});

export default combineSlice.reducer;
export const combinerAction = combineSlice.actions;
