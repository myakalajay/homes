import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usertype:""
    };

    const usertypeSlice = createSlice({
        name: 'user',
        // initialState: persistedState || initialState,
        // initialState:initialState,
        initialState: { usertype: '' },
        reducers: {
          setUserType: (state, action) => {
            // if (action.payload) {
            //     const { usertype } = action.payload;
            // state.usertype = usertype;
            //   }
            state.usertype = action.payload.usertype;
            },
        logout: (state) => {
           state.usertype = "";
          // localStorage.removeItem('auth');
          // localStorage.removeItem('isLoggedIn');
        },
      },
    });

    export const { setUserType, logout } = usertypeSlice.actions;
export default usertypeSlice.reducer;

