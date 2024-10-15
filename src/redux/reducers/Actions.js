
// src/redux/actions/exampleActions.js
export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data,
  });
  

  // src/redux/actions/dashActions.js
  export const SAVE_DASH_DATA = 'SAVE_DASH_DATA';
  
export const saveDashData = (data) => ({
  type: SAVE_DASH_DATA,
  payload: data,
});

export const setZip = (zipcode) => ({
  type: 'SET_ZIP',
  payload: zipcode
});
