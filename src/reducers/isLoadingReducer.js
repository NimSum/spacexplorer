const isLoadingReducer = (state = false, action) => {
  if (action.type === 'IS_LOADING') return action.bool;
  return state;
}

export default isLoadingReducer;