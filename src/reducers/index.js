import { combineReducers } from 'redux';
import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import spaceRelatedEventsReducer from './spaceRelatedEventsReducer'
import selectedLaunchReducer from './selectedLaunchReducer';
import toggleLaunchInfoReducer from './toggleLaunchInfoReducer';
import rocketsReducer from './rocketsReducer';
import spaceStationsReducer from './spaceStationsReducer';
import orbitersReducer from './orbitersReducer';
import astronautsReducer from './astronautsReducer';
import launchProvidersReducer from './launchProvidersReducer'

const rootReducer = combineReducers({
  upcomingLaunches: upcomingLaunchesReducer,
  upcomingSpaceEvents: spaceRelatedEventsReducer,
  selectedLaunch: selectedLaunchReducer,
  showLaunchInfo: toggleLaunchInfoReducer,
  rockets: rocketsReducer,
  spaceStations: spaceStationsReducer,
  orbiters: orbitersReducer,
  astronauts: astronautsReducer,
  launchProviders: launchProvidersReducer
});

export default rootReducer;