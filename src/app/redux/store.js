// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// Import your reducers here
import userReducer from './userSlice';
import blogReducer from './blogSlice';

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
