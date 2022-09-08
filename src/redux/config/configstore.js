import { configureStore } from "@reduxjs/toolkit";
import zipbobSlice from "../modules/zipbobSlice";

const store = configureStore({
  reducer: {
    zipbobSlice,
  },
});

export default store;