const toggleLaunchInfoReducer = (state = false, action) => {
  if (action.type === 'TOGGLE_LAUNCH_INFO') {
    return action.bool
  };
  return state;
}

export default toggleLaunchInfoReducer;