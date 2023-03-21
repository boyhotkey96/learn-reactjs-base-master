import { ADD_HOBBY_ACTION, SET_HOBBY_ACTION } from './constant';

export const addHobby = (payload) => {
  return { type: ADD_HOBBY_ACTION, payload };
};

export const setHobby = (payload) => {
  return { type: SET_HOBBY_ACTION, payload };
};
