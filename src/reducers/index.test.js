import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import spaceRelatedEventsReducer from './spaceRelatedEventsReducer'
import selectedLaunchReducer from './selectedLaunchReducer';
import toggleLaunchInfoReducer from './toggleLaunchInfoReducer';
import rocketsReducer from './rocketsReducer';
import spaceStationsReducer from './spaceStationsReducer';
import orbitersReducer from './orbitersReducer';
import astronautsReducer from './astronautsReducer';
import launchProvidersReducer from './launchProvidersReducer';
import isLoadingReducer from './isLoadingReducer';
import hasErroredReducer from './hasErroredReducer';
import * as mockData from '../utils/mockData';
import * as action from '../actions';

describe('Reducers', () => {

  describe('launchProvidersReducer', () => {
    it('should return a default state', () => {
      const result = launchProvidersReducer(undefined, {});
      const expected = {};
      expect(result).toEqual(expected);
    })

    it('should return launch providers if action type is valid', () => {
      const mockValidAction = action.addLaunchProviders(mockData.mockLaunchProviders);
      const result = launchProvidersReducer(undefined, mockValidAction);
      const expected = mockData.mockLaunchProviders;
      expect(result).toEqual(expected);
    })
  })

  describe('astronautsReducer', () => {

    it('should return a default state', () => {
      const result = astronautsReducer(undefined, {});
      const expected = {};
      expect(result).toEqual(expected);      
    })

    it('should return astronauts if action type is valid', () => {
      const mockValidAction = action.addAstronauts(mockData.mockAstronauts);
      const result = astronautsReducer(undefined, mockValidAction);
      const expected = mockData.mockAstronauts;
      expect(result).toEqual(expected);
    })
  })

  describe('orbitersReducer', () => {

    it('should return a default state', () => {
      const result = orbitersReducer(undefined, {})
      const expected = {}
      expect(result).toEqual(expected);      
    })

    it('should return orbiters if action type is valid', () => {
      const mockValidAction = action.addOrbiters(mockData.mockOrbiters);
      const result = orbitersReducer(undefined, mockValidAction);
      const expected = mockData.mockOrbiters;
      expect(result).toEqual(expected);
    })
  })

  describe('rocketsReducer', () => {

    it('should return a default state', () => {
      const result = rocketsReducer(undefined, {})
      const expected = {}
      expect(result).toEqual(expected);      
    })

    it('should return rockets if action type is valid', () => {
      const mockValidAction = action.addRockets(mockData.mockRockets);
      const result = rocketsReducer(undefined, mockValidAction)
      const expected = mockData.mockRockets;
      expect(result).toEqual(expected);
    })
  })

  describe('selectedLaunchReducer', () => {

    it('should return a default state', () => {
      const result = selectedLaunchReducer(undefined, {})
      const expected = {}
      expect(result).toEqual(expected);      
    })

    it('should return selected launch if action type is valid', () => {
      const mockSingleLaunch = mockData.mockLaunches.results[1];
      const mockValidAction = action.addSelectedLaunch(mockSingleLaunch);
      const result = selectedLaunchReducer(undefined, mockValidAction);
      const expected = mockSingleLaunch
      expect(result).toEqual(expected);
    })
  })

  describe('spaceRelatedEventsReducer', () => {

    it('should return a default state', () => {
      const result = spaceRelatedEventsReducer(undefined, {})
      const expected = []
      expect(result).toEqual(expected);      
    })

    it('should return space events if action type is valid', () => {
      const mockValidAction = action.addSpaceEvents(mockData.mockEvents);
      const result = spaceRelatedEventsReducer(undefined, mockValidAction);
      const expected = mockData.mockEvents;
      expect(result).toEqual(expected);
    })
  })

  describe('spaceStationsReducer', () => {

    it('should return a default state', () => {
      const result = spaceStationsReducer(undefined, {})
      const expected = {}
      expect(result).toEqual(expected);      
    })

    it('should return space stations if action type is valid', () => {
      const mockValidAction = action.addSpaceStations(mockData.mockSpaceStations);
      const result = spaceStationsReducer(undefined, mockValidAction)
      const expected = mockData.mockSpaceStations;
      expect(result).toEqual(expected);
    })
  })

  describe('toggleLaunchInfoReducer', () => {

    it('should return a default state', () => {
      const result = toggleLaunchInfoReducer(undefined, {});
      const expected = false;
      expect(result).toEqual(expected);      
    })

    it('should return boolean if action type is valid', () => {
      const mockValidAction = action.toggleLaunchInfo(true);
      const result = toggleLaunchInfoReducer(undefined, mockValidAction)
      const expected = true;
      expect(result).toEqual(expected);
    })
  })

  describe('upcomingLaunchesReducer', () => {

    it('should return a default state', () => {
      const result = upcomingLaunchesReducer(undefined, {})
      const expected = {}
      expect(result).toEqual(expected);      
    })

    it('should return upcoming launches if action type is valid', () => {
      const mockValidAction = action.addUpcomingLaunches(mockData.mockEvents)
      const result = upcomingLaunchesReducer(undefined, mockValidAction)
      const expected = mockData.mockEvents;
      expect(result).toEqual(expected);
    })
  })

  describe('hasErroredReducer', () => {

    it('should return a default state', () => {
      const result = hasErroredReducer(undefined, {})
      const expected = ''
      expect(result).toEqual(expected);      
    })

    it('should return error message if action type is valid', () => {
      const mockValidAction = action.hasErrored('Failed to Fetch Space Stuff :(')
      const result = hasErroredReducer(undefined, mockValidAction)
      const expected = 'Failed to Fetch Space Stuff :(';
      expect(result).toEqual(expected);
    })
  })

  describe('isLoadingReducer', () => {

    it('should return a default state', () => {
      const result = isLoadingReducer(undefined, {})
      const expected = false
      expect(result).toEqual(expected);      
    })

    it('should return loading boolean if action type is valid', () => {
      const mockValidAction = action.isLoading(true)
      const result = isLoadingReducer(undefined, mockValidAction)
      const expected = true;
      expect(result).toEqual(expected);
    })
  })
})