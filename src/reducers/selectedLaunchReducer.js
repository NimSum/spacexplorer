const selectedLaunchReducer = (state = {}, action) => {
  if (action.type === 'ADD_SELECTED_LAUNCH') {
    return action.event;
  }
  return state;
}

export default selectedLaunchReducer;