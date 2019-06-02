const launchProvidersReducer = (state = {}, action) => {
  if (action.type === 'ADD_LAUNCH_PROVIDERS') return action.launchProviders;
  return state;
}

export default launchProvidersReducer;