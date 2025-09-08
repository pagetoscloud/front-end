import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name: 'collection',
    initialState: [{name: '', link: '', image: '', visitor: []}],
    reducers: {
        initialCollection: (state, action) => {
            return state = action.payload
        },

    }
});


export default collectionSlice.reducer;
export const { initialCollection } = collectionSlice.actions;