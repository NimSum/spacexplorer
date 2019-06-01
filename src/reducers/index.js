import { combineReducers } from 'redux';
import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import spaceRelatedEventsReducer from './spaceRelatedEventsReducer'
import selectedLaunchReducer from './selectedLaunchReducer';
import toggleLaunchInfoReducer from './toggleLaunchInfoReducer';

const rootReducer = combineReducers({
  upcomingLaunches: upcomingLaunchesReducer,
  upcomingSpaceEvents: spaceRelatedEventsReducer,
  selectedLaunch: selectedLaunchReducer,
  showLaunchInfo: toggleLaunchInfoReducer
});

export default rootReducer;