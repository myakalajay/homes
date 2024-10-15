// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
  example: AppReducer,
});

export default rootReducer;
