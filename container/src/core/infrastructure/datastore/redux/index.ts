import { configureStore } from "@reduxjs/toolkit";
import stateManagerSlice from "./features/stateManagerSlice";

export const store = configureStore({
  reducer: {
    stateManager: stateManagerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;