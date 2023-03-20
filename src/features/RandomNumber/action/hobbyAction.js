export const addHobby = (payload) => {
  return { type: 'ADD_HOBBY', payload };
};

export const setHobby = (payload) => {
  return {type: "SET_HOBBY", payload}
}
