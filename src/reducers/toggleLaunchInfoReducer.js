export const toggleLaunchInfoReducer = (state = false, action) => {
  if (action.type === 'TOGGLE_LAUNCH_INFO') return !state;
  return state;
}