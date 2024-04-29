// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cardDataReducer from "./cardDataSlice";
import cardDataSlice from "./cardDataSlice";

export const store = configureStore({
  reducer: {
    cards: cardDataReducer,
  },
});
