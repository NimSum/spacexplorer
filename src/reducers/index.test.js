import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import spaceRelatedEventsReducer from './spaceRelatedEventsReducer'
import selectedLaunchReducer from './selectedLaunchReducer';
import toggleLaunchInfoReducer from './toggleLaunchInfoReducer';
import rocketsReducer from './rocketsReducer';
import spaceStationsReducer from './spaceStationsReducer';
import orbitersReducer from './orbitersReducer';
import astronautsReducer from './astronautsReducer';
import launchProvidersReducer from './launchProvidersReducer';
import * as mockData from '../utils/mockData';
import * as action from '../actions';

describe('Reducers', () => {

  describe('launchProvidersReducer', () => {
    it('should return a default state', () => {
      const result = launchProvidersReducer(undefined, {});
      const expected = {};
      expect(result).toEqual(expected);
    })

    it('should return the action payload if action type is valid', () => {
      const mockValidAction = action.addLaunchProviders(mockData.mockLaunchProviders);
      const result = launchProvidersReducer(undefined, mockValidAction);
      const expected = mockData.mockLaunchProviders;
      expect(result).toEqual(expected);
    })
  })

  
})