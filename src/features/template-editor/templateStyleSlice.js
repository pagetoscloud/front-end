import { createSlice } from "@reduxjs/toolkit";

const templateStyleSlice = createSlice({
    name: 'templateStyle',
    initialState: {
        current: {},
    },
    reducers: {
        initialStyle: (state, action) => {
            return {
                ...state,
                current: action.payload.data,
            }
        },
        changeScreen: (state, action) => {
            return {
                ...state,
                current: {
                    [action.payload.component]: {
                       data: 
                            {
                                ...state.current[action.payload.component].data, 
                                title: {
                                                ...state.current[action.payload.component].data.title, 
                                                [action.payload.itemData]: action.payload.data
                                            }
                            },
                       style: 
                            {
                                ...state.current[action.payload.component].style, 
                                title: {
                                                ...state.current[action.payload.component].style.title, 
                                                [action.payload.itemStyle]: action.payload.style
                                            }
                            }
                    }
                }
            }
        },
        changeTitle: (state, action) => {
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.payload.component]: {
                       data: 
                            {
                                ...state.current[action.payload.component].data, 
                                title: {
                                                ...state.current[action.payload.component].data.title, 
                                                [action.payload.itemData]: action.payload.data
                                       }
                            },
                       style: 
                            {
                                ...state.current[action.payload.component].style, 
                                title: {
                                                ...state.current[action.payload.component].style.title, 
                                                [action.payload.itemStyle]: action.payload.style
                                       }
                            }
                    },
                }
            }
        },
        changeText: (state, action) => {
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.payload.component]: {
                        data: 
                                {
                                    ...state.current[action.payload.component].data, 
                                    [action.payload.type]: {
                                                    ...state.current[action.payload.component].data[action.payload.type], 
                                                    [action.payload.itemData]: action.payload.data
                                                }
                                },
                        style: 
                                {
                                    ...state.current[action.payload.component].style, 
                                    [action.payload.type]: {
                                                    ...state.current[action.payload.component].style[action.payload.type], 
                                                    [action.payload.itemStyle]: action.payload.style
                                                }
                                }
                    }
                }
            }
        },
        changeBackground: (state, action) => {
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.payload.component]: {
                       data: 
                            {
                                ...state.current[action.payload.component].data, 
                                [action.payload.type]: {
                                                ...state.current[action.payload.component].data[action.payload.type], 
                                                [action.payload.itemData]: action.payload.data
                                            }
                            },
                       style: 
                            {
                                ...state.current[action.payload.component].style, 
                                [action.payload.type]: {
                                                ...state.current[action.payload.component].style[action.payload.type], 
                                                [action.payload.itemStyle]: action.payload.style
                                            }
                            }
                    }
                }
            }
        },
        changeStyleImage: (state, action) => {
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.payload.component]: {
                       data: 
                            {
                                ...state.current[action.payload.component].data, 
                                image: {
                                                ...state.current[action.payload.component].data.image, 
                                                [action.payload.itemData]: action.payload.data
                                            }
                            },
                       style: 
                            {
                                ...state.current[action.payload.component].style, 
                                image: {
                                                ...state.current[action.payload.component].style.image, 
                                                [action.payload.itemStyle]: action.payload.style
                                            }
                            }
                    }
                }
            }
        },
        changeStyleButton: (state, action) => {
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.payload.component]: {
                       data: 
                            {
                                ...state.current[action.payload.component].data, 
                                button: {
                                                ...state.current[action.payload.component].data.button, 
                                                [action.payload.itemData]: action.payload.data
                                            }
                            },
                       style: 
                            {
                                ...state.current[action.payload.component].style, 
                                button: {
                                                ...state.current[action.payload.component].style.button, 
                                                [action.payload.itemStyle]: action.payload.style
                                            }
                            }
                    }
                }
            }
        },
    }
});

export const { undoState, redoState, changeScreen, changeBackground, changeStyleImage, changeTitle, changeText, initialStyle, changeStyleButton } = templateStyleSlice.actions;
export default templateStyleSlice.reducer;