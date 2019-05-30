const spaceRelatedEventsReducer = (state = [], action) => {
  if (action.type === 'ADD_SPACE_EVENTS') {
    return action.events;
  }
  return state;
}

export default spaceRelatedEventsReducer;