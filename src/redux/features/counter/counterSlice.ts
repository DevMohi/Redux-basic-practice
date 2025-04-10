import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state , action) => {
      // plain object return korte hobe , ar increament ar decreament hocce action 
      state.count = state.count + action.payload;
    },
    decreament: (state) => {
      // plain object return korte hobe
      state.count = state.count - 1;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;

export default counterSlice.reducer;

// slice er jonno -> name(unique hoite hobe ) , initialState and reducers
