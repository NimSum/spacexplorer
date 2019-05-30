import { combineReducers } from 'redux';
import upcomingLaunchesReducer from './upcomingLaunchesReducer';

const rootReducer = combineReducers({
  upcomingLaunches: upcomingLaunchesReducer
});

export default rootReducer;