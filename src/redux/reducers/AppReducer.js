// src/redux/reducers/exampleReducer.js
const initialState = {
    data: null,
  };
  
  const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default AppReducer;
  