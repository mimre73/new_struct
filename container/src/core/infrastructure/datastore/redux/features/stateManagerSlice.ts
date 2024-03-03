import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StateManager } from "@/core/types/storeState";
import { DispatchActionUseCaseParam } from "@/core/domain/usecases/store";

const initialState: StateManager = {
  stateManager: {},
};
export const stateManagerSlice = createSlice({
  name: "stateManager",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<DispatchActionUseCaseParam>) => {
      const temp = state.stateManager;
      temp[action.payload.actionId] = action.payload.data;
      state.stateManager = temp;
    },
  },
});

export const { set } = stateManagerSlice.actions;

export default stateManagerSlice.reducer;
