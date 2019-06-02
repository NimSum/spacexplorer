import * as action from './index';
import { mockLaunches, mockAstronauts, mockEvents } from '../utils/mockData';

describe('Actions', () => {
  it('addUpcomingLaunches should return valid action object', () => {
    const result = action.addUpcomingLaunches(mockLaunches);
    const expected = {
      type: 'ADD_UPCOMING_LAUNCHES',
      launches: mockLaunches
    };
    expect(result).toEqual(expected);
  })


  it('addSpaceEvents should return valid action object', () => {
    const result = action.addSpaceEvents(mockEvents);
    const expected = {
      type: 'ADD_SPACE_EVENTS',
      events: mockEvents
    };
    expect(result).toEqual(expected);
  })
})