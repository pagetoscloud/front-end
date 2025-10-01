// store/authSlice.js (if using Redux Toolkit)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuthStatus = createAsyncThunk(
  'auth/fetchStatus',
  async () => {

    const url = process.env.NODE_ENV !== 'development' 
      ? `${process.env.API_URL}/auth/login-status` 
      : 'http://localhost:5001/auth/login-status';

    const res = await fetch(url, {
        method: "GET",
        credentials: 'include',
        mode: 'cors',
        headers: {
            "Content-Type":"application/json"
        }
    });
    // const res = await fetch('/api/auth/status', {
    //   credentials: 'include',
    // });
    const data = await res.json();
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    // user: null,
    loading: true,
  },
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
    //   state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthStatus.fulfilled, (state, action) => {
        state.loggedIn = action.payload.loggedIn;
        // state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(fetchAuthStatus.rejected, (state) => {
        state.loggedIn = false;
        // state.user = null;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
