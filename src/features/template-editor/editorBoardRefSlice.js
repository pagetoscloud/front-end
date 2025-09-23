import { createSlice } from "@reduxjs/toolkit";

const editorBoardRefSlice = createSlice({
    name: 'editorRef',
    initialState: {
        currentRef:{}
    },
    reducers: {
        changeRef: (state, action) => {
            state.currentRef = action.payload
        },
    }
});

export default editorBoardRefSlice.reducer;
export const { changeRef } = editorBoardRefSlice.actions