import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = null;

export const toasterSlice = createSlice({
  name: "toasterSlice",
  initialState,
  reducers: {
    successToast: (state, action) => {
      state = toast.success(action.payload);
    },
    errorToast: (state, action) => {
      state = toast.error(action.payload);
    },
  },
});

export const { successToast, errorToast } = toasterSlice.actions;

export default toasterSlice.reducer;
