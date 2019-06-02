import * as action from './index';
import { mockLaunches, mockAstronauts } from '../utils/mockData';

describe('Actions', () => {
  it('addUpcomingLaunches should return valid action object', () => {
    const result = action.addUpcomingLaunches(mockLaunches);
    const expected = {
      type: 'ADD_UPCOMING_LAUNCHES',
      launches: mockLaunches
    };
    expect(result).toEqual(expected);
  })

})