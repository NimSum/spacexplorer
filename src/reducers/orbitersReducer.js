const orbitersReducer = (state = [], action) => {
  if (action.type === 'ADD_ORBITERS') return action.orbiters;
  return state;
}

export default orbitersReducer;