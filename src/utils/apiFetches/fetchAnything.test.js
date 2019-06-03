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
  
})