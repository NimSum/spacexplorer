const upcomingLaunchesReducer = (state = [], action) => {
  if (action.type === 'ADD_UPCOMING_LAUNCHES') {
    return action.launches;
  }
  return state;
}

export default upcomingLaunchesReducer;