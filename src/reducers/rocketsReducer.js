const rocketsReducer = (state = [], action) => {
  if (action.type === 'ADD_ROCKETS') return action.rockets;
  return state;
}

export default rocketsReducer;