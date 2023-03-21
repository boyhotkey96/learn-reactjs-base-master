import { ADD_HOBBY_ACTION, SET_HOBBY_ACTION } from '../action/constant';

const initialize = { hobbyList: [], activeId: null };
const getStorage = JSON.parse(localStorage.getItem('random-number'));
const initHobby = getStorage || initialize;

const hobbyReducer = (state = initHobby, action) => {
  let newState = null;

  switch (action.type) {
    case ADD_HOBBY_ACTION:
      /* const newState = {...state}
      newState.hobbyList.push(action.payload);

      return { ...state, newState }; */

      /*  const newHobbyList = [...state.hobbyList];
      newHobbyList.push(action.payload);

      return { ...state, hobbyList: [...newHobbyList] }; */

      newState = {
        ...state,
        hobbyList: [...state.hobbyList, action.payload],
      };
      localStorage.setItem('random-number', JSON.stringify(newState));
      break;
    case SET_HOBBY_ACTION:
      newState = { ...state, activeId: action.payload };
      localStorage.setItem('random-number', JSON.stringify(newState));
      break;
    default:
      return state;
  }

  return newState;
};

export default hobbyReducer;
