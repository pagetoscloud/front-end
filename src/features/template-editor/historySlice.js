// features/historySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  canUndo: false,
  canRedo: false,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    changeHistory: (state, action) => {
        return {
            ...state,
            canUndo: action.payload.undo,
            canRedo: action.payload.redo
        }
    },
  },
});

export const { changeHistory } = historySlice.actions;
export default historySlice.reducer;