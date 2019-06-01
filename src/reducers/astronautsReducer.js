const astronautsReducer = (state = [], action) => {
  if (action.type === 'ADD_ASTRONAUTS') return action.astronauts;
  return state;
}

export default astronautsReducer;