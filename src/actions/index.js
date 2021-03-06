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

export const toggleLaunchInfo = (bool) => ({
  type: 'TOGGLE_LAUNCH_INFO',
  bool: bool
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool: bool
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})

export const addRockets = rockets => ({
  type: 'ADD_ROCKETS',
  rockets
})

export const addSpaceStations = spaceStations => ({
  type: 'ADD_SPACE_STATIONS',
  spaceStations
})

export const addOrbiters = orbiters => ({
  type: 'ADD_ORBITERS',
  orbiters
})

export const addAstronauts = astronauts => ({
  type: 'ADD_ASTRONAUTS',
  astronauts
})

export const addLaunchProviders = launchProviders => ({
  type: 'ADD_LAUNCH_PROVIDERS',
  launchProviders
})