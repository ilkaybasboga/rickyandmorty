import { configureStore } from "@reduxjs/toolkit";
import getReducer from "../features/getSlice";

const store = configureStore({
  reducer: {
    get: getReducer,
  },
});

export default store;