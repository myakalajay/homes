// // src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const initialState = {
//     isLoggedIn: false
//   };

const initialState = {
  isLoggedIn: false,
    email: '',
    token: '',
    userid: '',
    username: '',
    expireTime: null,
    firstname: '',
    lastname: '',
    propertyid:'',
    quotations:[],
    loggedIn:false
  };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isLoggedIn: false,
//     email: '',
//     token: '',
//     userId: '',
//     username: '',
//     expireTime: null,
//   },
//   reducers: {
//     setLoginData: (state, action) => {
//         state.isLoggedIn = true;
//       const { email, token, userId, username, expireTime } = action.payload;
//       state.email = email;
//       state.token = token;
//       state.userId = userId;
//       state.username = username;
//       state.expireTime = expireTime;
//     //   const serializedState = JSON.stringify(state);
//     //   console.log('Serialized state:', serializedState); // Log the serialized state
      
//     //   localStorage.setItem('auth', serializedState);
//     },

// const persistedState = JSON.parse(localStorage.getItem('auth'));

const authSlice = createSlice({
    name: 'auth',
    // initialState: persistedState || initialState,
    initialState:initialState,
    reducers: {
      setLoginData: (state, action) => {
        state.isLoggedIn = true;
        if (action.payload) {
            const { email, token, userid, username, expireTime, firstname,lastname } = action.payload;
        // const { email, token, userId, username, expireTime } = action.payload;   
        state.email = email;
            state.token = token;
            state.userid = userid;
            state.username = username;
            state.expireTime = expireTime;
            state.firstname = firstname;
            state.lastname = lastname
            // localStorage.setItem('auth', JSON.stringify(state));
            // localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
          }
        },
        setAuthState:(state,action)=>{
          if (action.payload) {
            const { loggedIn } = action.payload;
            state.loggedIn = loggedIn;
            // localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
          }
        },

          setPropertyId: (state, action) => {
            // state.isLoggedIn = true;
            if (action.payload) {
                const {propertyid } = action.payload;
            // const { email, token, userId, username, expireTime } = action.payload;   
            state.propertyid = propertyid;
             
                // localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
              }
        },
        // dispatch(setquotation({auotations:response}))
        // useSelector(sta.wuo)
        setQuotations: (state, action) => {
          if (action.payload) {
            const {quotations } = action.payload;
        // const { email, token, userId, username, expireTime } = action.payload;   
        state.quotations = quotations;
         
            // localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
          }
        },
    logout: (state) => {
        state.isLoggedIn = false;
      state.email = '';
      state.token = '';
      state.userid = '';
      state.username = '';
      state.expireTime = null;
      state.firstname = '';
      state.lastname = '';
      // localStorage.removeItem('auth');
      // localStorage.removeItem('isLoggedIn');
    },
  },
});

// const persistedState = JSON.parse(localStorage.getItem('auth'));
// if (persistedState) {
//     initialState = persistedState;
// }

export const { setLoginData, logout,setPropertyId,setQuotations,setAuthState } = authSlice.actions;
export default authSlice.reducer;

// src/redux/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// let initialState = {
//     isLoggedIn: false,
//     email: '',
//     token: '',
//     userId: '',
//     username: '',
//     expireTime: null,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setLoginData: (state, action) => {
//             state.isLoggedIn = true;
//             const { email, token, userId, username } = action.payload;
//             state.email = email;
//             state.token = token;
//             state.userId = userId;
//             state.username = username;
//             // state.expireTime = expireTime;

//             // Save to localStorage
//             sessionStorage.setItem('auth', JSON.stringify(state));
//         },
//         logout: (state) => {
//             state.isLoggedIn = false;
//             state.email = '';
//             state.token = '';
//             state.userId = '';
//             state.username = '';
//             state.expireTime = null;
//             // Clear localStorage
//             sessionStorage.removeItem('auth');
//         },
//     },
// });

// // Load initial state from localStorage if available
// const persistedState = JSON.parse(sessionStorage.getItem('auth'));
// if (persistedState) {
//     initialState = persistedState;
// }

// export const { setLoginData, logout } = authSlice.actions;
// export default authSlice.reducer;
