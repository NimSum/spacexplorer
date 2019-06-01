const spaceStationsReducer = (state = [], action) => {
  if (action.type === 'ADD_SPACE_STATIONS') return action.spaceStations;
  return state;
}

export default spaceStationsReducer;