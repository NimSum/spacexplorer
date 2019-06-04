const hasErroredReducer = (state = '', action) => {
  if (action.type === 'HAS_ERRORED') return action.error;
  return state;
}

export default hasErroredReducer;