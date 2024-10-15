// src/redux/reducers/dashReducer.js
import { SAVE_DASH_DATA } from '../action/dashaction';

const initialState = {
  dashData: null,
};

const dashreducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DASH_DATA:
      return {
        ...state,
        dashData: action.payload,
      };
    default:
      return state;
  }
};

export default dashreducer;
