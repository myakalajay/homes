// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
 
const initialState = {
  token: null,
  session: null,
  isAuthenticated: false,
};
 
const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.session = action.payload.session;
      state.isAuthenticated = !!action.payload.token;
    },
    clearAuthData: (state) => {
      state.token = null;
      state.session = null;
      state.isAuthenticated = false;
    },
  },
});
 
export const { setAuthData, clearAuthData } = sessionSlice.actions;
export default sessionSlice.reducer;
 