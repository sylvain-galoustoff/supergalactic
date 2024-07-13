import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toasts: [],
};

export const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload);
    },
    deleteToast: (state, action) => {
      console.log(action.payload);
      const toastId = action.payload.toastId;
      console.log(toastId);
      state.toasts = state.toasts.filter((toast) => toast.toastId !== toastId);
      console.log(state.toasts);
    },
  },
});

export const { addToast, deleteToast } = toasterSlice.actions;
export default toasterSlice.reducer;
