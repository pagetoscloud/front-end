
import { createSlice } from "@reduxjs/toolkit";

const templatePagePositionSlice = createSlice({
    name: 'templateComponents',
    initialState: {
        currentPosition: false
    },
    reducers: {
        changePage: (state, action) => {
            state.currentPosition = action.payload
        },
    }
});


export default templatePagePositionSlice.reducer;
export const { changePage } = templatePagePositionSlice.actions