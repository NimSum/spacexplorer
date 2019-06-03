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

  it('should return fetched data if response is good', async () => {
    const result = await fetchAnything(apiUrls.upcomingLaunches);
    const expected = mockUpcomingLaunches;
    expect(result).toEqual(expected);
  })

  it('should throw error if fetch fails', async () => {
    window.fetch = () => Promise.resolve({ ok: false
    })
    const result = fetchAnything(apiUrls.upcomingLaunches);
    const expected = Error('Failed to get space stuff :(');
    await expect(result).rejects.toThrow(expected);
  })
})