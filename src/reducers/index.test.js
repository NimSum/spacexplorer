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

  describe('astronautsReducer', () => {

    it('should return a default state', () => {
      const result = astronautsReducer(undefined, {});
      const expected = {};
      expect(result).toEqual(expected);      
    })

    it('should return the action payload if action type is valid', () => {
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

    it('should return the action payload if action type is valid', () => {
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

    it('should return the action payload if action type is valid', () => {
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

    it('should return the action payload if action type is valid', () => {
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
      const expected = {}
      expect(result).toEqual(expected);      
    })

    it('should return the action payload if action type is valid', () => {
      const mockValidAction = action.spaceRelatedEventsReducer(mockData.mockEvents);
      const result = spaceRelatedEventsReducer(undefined, mockValidAction);
      const expected = mockData.mockEvents;
      expect(result).toEqual(expected);
    })
  })
})