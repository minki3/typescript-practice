import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import combineSlice from "./combineSlice";
import booleanSlice from "./booleanSlice";

const store = configureStore({
  reducer: {
    combineSlice: combineSlice,
    booleanSlice: booleanSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
