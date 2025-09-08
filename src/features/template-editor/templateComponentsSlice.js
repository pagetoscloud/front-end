import { createSlice } from "@reduxjs/toolkit";

const templateComponentsSlice = createSlice({
    name: 'templateComponents',
    initialState: [],
    reducers: {
        initialComponents: (state, action) => {
            return state = action.payload.data
        },

    }
});


export default templateComponentsSlice.reducer;
export const { initialComponents } = templateComponentsSlice.actions