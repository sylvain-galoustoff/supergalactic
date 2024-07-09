import { configureStore } from "@reduxjs/toolkit";
import toasterReducer from "./toasterSlice";

export const store = configureStore({
  reducer: {
    toaster: toasterReducer,
  },
});
