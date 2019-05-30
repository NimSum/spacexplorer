import { combineReducers } from 'redux';
import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import spaceRelatedEventsReducer from './spaceRelatedEventsReducer'

const rootReducer = combineReducers({
  upcomingLaunches: upcomingLaunchesReducer,
  upcomingSpaceEvents: spaceRelatedEventsReducer
});

export default rootReducer;