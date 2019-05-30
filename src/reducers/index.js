import { combineReducers } from 'redux';
import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import spaceRelatedEventsReducer from './spaceRelatedEventsReducer'
import selectedLaunchReducer from './selectedLaunchReducer';

const rootReducer = combineReducers({
  upcomingLaunches: upcomingLaunchesReducer,
  upcomingSpaceEvents: spaceRelatedEventsReducer,
  selectedLaunch: selectedLaunchReducer
});

export default rootReducer;