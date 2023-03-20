import { combineReducers } from 'redux';
import hobbyReducer from './hobbyReducer';
import productsReducer from './productsReducer';

export const rootReducer = combineReducers({
  hobbyRe: hobbyReducer,
  productsRe: productsReducer,
});
