import { Colors, MenuItems } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  [MenuItems.PENCIL]: {
    color: Colors.BLACK,
    size: 3,
  },
  [MenuItems.ERASER]: {
    color: Colors.WHITE,
    size: 3,
  },
};

export const ToolBoxSlice = createSlice({
  name: "ToolBox",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item].color = action.payload.color;
    },
    changeBrushSize: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeBrushSize } = ToolBoxSlice.actions;
export default ToolBoxSlice.reducer;
