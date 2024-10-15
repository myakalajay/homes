// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   zipcode: ''
// }

// const zipcodeSlice = createSlice({
//   name: 'zipcode',
//   initialState:initialState,
//   reducers: {
//     setZip:(state, action)=> {
//       const {zipcode} = action.payload
//       state.zipcode = zipcode // Directly update state with the payload
//     },
//     resetZip:(state,action)=> {
//       state.zipcode = ""// Reset the state to initial value
//     },
//   },
// });
// // console.log(zipcode);

// export const { setZip , resetZip,logout } = zipcodeSlice.actions;
// export default zipcodeSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  zipcode: ''
};

const zipcodeSlice = createSlice({
  name: 'zipcode',
  initialState: initialState,
  reducers: {
    setZip: (state, action) => {
      state.zipcode = action.payload; // Use the payload directly
    },
    resetZip: (state) => {
      state.zipcode = ''; // Reset the state to initial value
    },
  },
});

// Exporting the actions
export const { setZip, resetZip } = zipcodeSlice.actions;

// Exporting the reducer
export default zipcodeSlice.reducer;
