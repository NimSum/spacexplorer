import * as action from './index';
import * as mockData from '../utils/mockData';

describe('Actions', () => {
  describe('ADD_UPCOMING_LAUNCHES', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addUpcomingLaunches(mockData.mockLaunches);
      const expected = {
        type: 'ADD_UPCOMING_LAUNCHES',
        launches: mockData.mockLaunches
      };
      expect(result).toEqual(expected);
    })
  })

  describe('ADD_SPACE_EVENTS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addSpaceEvents(mockData.mockEvents);
      const expected = {
        type: 'ADD_SPACE_EVENTS',
        events: mockData.mockEvents
      };
      expect(result).toEqual(expected);
    })
  })

  describe('ADD_SELECTED_LAUNCH', () => {
    it('should return object with valid action type and payload', () => {
      const mockEvent = mockData.mockEvents.results[2];
      const result = action.addSelectedLaunch(mockEvent)
      const expected = {
        type: 'ADD_SELECTED_LAUNCH',
        event: mockEvent      
      };
      expect(result).toEqual(expected);
    })
  })

  describe('TOGGLE_LAUNCH_INFO', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.toggleLaunchInfo(true)
      const expected = {
        type: 'TOGGLE_LAUNCH_INFO',
        bool: true
      };
      expect(result).toEqual(expected);
    })
  })  

  describe('ADD_ROCKETS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addRockets(mockData.mockRockets)
      const expected = {
        type: 'ADD_ROCKETS',
        rockets: mockData.mockRockets
      };
      expect(result).toEqual(expected);
    })
  })

  describe('ADD_SPACE_STATIONS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addSpaceStations(mockData.mockSpaceStations);
      const expected = {
        type: 'ADD_SPACE_STATIONS',
        spaceStations: mockData.mockSpaceStations
      };
      expect(result).toEqual(expected);
    })
  })

  describe('ADD_ORBITERS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addOrbiters(mockData.mockOrbiters)
      const expected = {
        type: 'ADD_ORBITERS',
        orbiters: mockData.mockOrbiters  
      };
      expect(result).toEqual(expected);
    })
  })
  
  describe('ADD_ASTRONAUTS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addAstronauts(mockData.mockAstronauts);
      const expected = {
        type: 'ADD_ASTRONAUTS',
        astronauts: mockData.mockAstronauts    
      };
      expect(result).toEqual(expected);
    })
  })
  
  describe('ADD_LAUNCH_PROVIDERS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addLaunchProviders(mockData.mockLaunchProviders);
      const expected = {
        type: 'ADD_LAUNCH_PROVIDERS',
        launchProviders: mockData.mockLaunchProviders  
      };
      expect(result).toEqual(expected);
    })
  })

  describe('IS_LOADING', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.isLoading(true)
      const expected = {
        type: 'IS_LOADING',
        bool: true
      };
      expect(result).toEqual(expected);
    })
  })

})