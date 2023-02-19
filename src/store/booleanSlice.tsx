import { createSlice } from "@reduxjs/toolkit";

interface Boolean {
  toggletf: boolean;
}

const initialState = {
  toggletf: false,
} as Boolean;

const boolean = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    toggle: (state) => {
      state.toggletf = !state.toggletf;
    },
  },
});

export default boolean.reducer;
export const booleanActions = boolean.actions;
