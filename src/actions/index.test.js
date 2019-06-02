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

  

})