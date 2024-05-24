import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@/slice/menuSlice";
import toolBoxSlice from "./slice/toolBoxSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    toolBox: toolBoxSlice,
  },
});
