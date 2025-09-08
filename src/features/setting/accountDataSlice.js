import { createSlice } from "@reduxjs/toolkit";
import personalProfileDummy from '../../assets/images/fish-burger.jpg'

const accountDataSlice = createSlice({
    name: 'accountData',
    initialState: {
        personalData: {
            username: 'ugiv',
            email: 'ugi@gmail.com',
            password: 'ugiee123',
            profilePicture: personalProfileDummy,
            accountType: 'free',
        }
    },
    reducers: {
        changeAllData: (state, action) => {
            return {
                ...state,
                personalData: action.payload
            }
        },
        changeUsername: (state, action) => {   
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    username: action.payload
                }
            }
        },
        changeProfilePicture: (state, action) => {
            return {
                ...state,
                personalData: {
                    ...state.personalData,
                    profilePicture: action.payload
                }
            }
        }
    }
});

export default accountDataSlice.reducer;
export const {changeAllData, changeUsername, changeProfilePicture} = accountDataSlice.actions;