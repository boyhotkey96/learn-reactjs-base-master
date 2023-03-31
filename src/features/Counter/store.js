import { configureStore } from '@reduxjs/toolkit';
import hobbyReducer from 'features/RandomNumber/reducers/hobbyReducer';
import productsReducer from 'features/RandomNumber/reducers/productsReducer';
import counterReducer from './counterSlice';

const rootReducers = {
  count: counterReducer,
  hobby: hobbyReducer,
  products: productsReducer,
};

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

store.subscribe(() => console.log(store.getState()));
