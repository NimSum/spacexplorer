import * as action from './index';
import { mockLaunches, mockAstronauts, mockEvents } from '../utils/mockData';

describe('Actions', () => {
  describe('ADD_UPCOMING_LAUNCHES', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addUpcomingLaunches(mockLaunches);
      const expected = {
        type: 'ADD_UPCOMING_LAUNCHES',
        launches: mockLaunches
      };
      expect(result).toEqual(expected);
    })
  })

  describe('ADD_SPACE_EVENTS', () => {
    it('should return object with valid action type and payload', () => {
      const result = action.addSpaceEvents(mockEvents);
      const expected = {
        type: 'ADD_SPACE_EVENTS',
        events: mockEvents
      };
      expect(result).toEqual(expected);
    })
  })

  describe('ADD_SELECTED_LAUNCH', () => {
    it('should return object with valid action type and payload', () => {
      const mockEvent = mockEvents.results[2];
      const result = action.addSelectedLaunch(mockEvent)
      const expected = {
        type: 'ADD_SELECTED_LAUNCH',
        event: mockEvent      
      };
      expect(result).toEqual(expected);
    })
  })


})