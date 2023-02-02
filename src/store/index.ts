import {
  configureStore,
} from '@reduxjs/toolkit';
import {
  combineReducers,
} from 'redux';
import form from './form';

const reducer = combineReducers({
  form,
});

const store = configureStore({
  reducer,
});
export default store;