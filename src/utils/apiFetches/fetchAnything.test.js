import fetchAnything from './fetchAnything';
import apiUrls from './apiUrls';
import { mockUpcomingLaunches } from '../mockData';

window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockUpcomingLaunches)
  })
});

describe('fetchAnything fetch', () => {
  it('should fetch with the correct url passed', () => {
    fetchAnything(apiUrls.upcomingLaunches);
    const expected = `https://cors-anywhere.herokuapp.com/${apiUrls.upcomingLaunches}`;
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })
})