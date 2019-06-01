export const addUpcomingLaunches = launches => ({
  type: 'ADD_UPCOMING_LAUNCHES',
  launches
})

export const addSpaceEvents = events => ({
  type: 'ADD_SPACE_EVENTS',
  events
})

export const addSelectedLaunch = event => ({
  type: 'ADD_SELECTED_LAUNCH',
  event
})

export const toggleLaunchInfo = () => ({
  type: 'TOGGLE_LAUNCH_INFO'
})