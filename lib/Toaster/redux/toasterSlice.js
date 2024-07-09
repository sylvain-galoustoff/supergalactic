import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toasts: [
    {
      show: true,
      type: "danger",
      message: "The world is about to collapse.",
    },
    {
      show: true,
      type: "warning",
      message: "You should be carefull",
    },
    {
      show: true,
      type: "success",
      message: "It's a beautifull day !",
    },
  ],
};

export const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload);
    },
  },
});

export const { addToast } = toasterSlice.actions;
export default toasterSlice.reducer;
