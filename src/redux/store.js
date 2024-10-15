// // src/redux/store.js
// import { createStore,combineReducers  } from 'redux';
// import rootReducer from './reducers';
// import dashreducer from './reducers/dashreducer';
 
// const rootReducer = combineReducers({
//     dash: dashreducer,
//     // other reducers can go here
//   });
 
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
 
// export default store;
 
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './propertySlice';
import loanReducer from './loanSlice';
import authReducer from './authSlice';
import { authSlice } from './authSlice';
import usertypeReducer from './usertypeSlice';
import zipcodeReducer from './zipcodeSlice';
import sessionSlice from './sessionSlice';
 
 
 
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: usertypeReducer,
    zipcode: zipcodeReducer,
    session:sessionSlice
  },
});
// const store = configureStore({
//     reducer: {
//         property: propertyReducer,
//         loan: loanReducer,
//     },
// });
 
export default store;