import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'Auth/userSlice';
import counterReducer from 'features/Counter/counterSlice';
import hobbyReducer from 'features/RandomNumber/reducers/hobbyReducer';
import productsReducer from 'features/RandomNumber/reducers/productsReducer';

const rootReducers = {
  count: counterReducer,
  hobby: hobbyReducer,
  products: productsReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

store.subscribe(() => console.log(store.getState()));
