import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'COUNTER',
  initialState: 5,
  reducers: {
    increment: (state, action) => {
      return state + (action.payload || 1);
    },
    decrement: (state, action) => {
      return state - (action.payload || 1);
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions;
export default reducer;
