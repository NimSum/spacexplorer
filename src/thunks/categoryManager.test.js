import * as action from '../actions';
import * as mockData from '../utils/mockData';
import fetchAnything from '../utils/apiFetches/fetchAnything';
import categoryManager from './categoryManager';
import apiUrls from '../utils/apiFetches/apiUrls';

jest.mock('../utils/apiFetches/fetchAnything');

describe('categoryManager thunk', () => {

  const mockDispatch = jest.fn();
  let thunk;

  it('should dispatch loading action when invoked', () => {
    const expectedAction = action.isLoading(true);
    thunk = categoryManager('astronauts')(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  })

  it('should dispatch loading action after successful fetch', async () => {
    const expectedAction = action.isLoading(false);
    thunk = categoryManager('rockets');
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  })

  it('should catch errors if any of the fetches fail', async () => {
    fetchAnything.mockImplementation(() => Promise.reject({ message: 'Failed to fetch' })); 
    const expectedAction = action.hasErrored('Failed to fetch');
    thunk = categoryManager('astronauts');
   await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  })

  describe('CASE: rockets', () => {
    it('should fetch rockets and dispatch action with correct params', async () => {
      fetchAnything.mockImplementation(() => mockData.mockRockets);
      const expectedAction = action.addRockets(mockData.mockRockets);

      thunk = categoryManager('rockets');
      await thunk(mockDispatch);

      expect(fetchAnything).toHaveBeenCalledWith(apiUrls.rockets);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    })
  })

  describe('CASE: astronauts', () => {
    it('should fetch rockets and dispatch action with correct params', async () => {
      fetchAnything.mockImplementation(() => mockData.mockAstronauts);
      const expectedAction = action.addAstronauts(mockData.mockAstronauts);

      thunk = categoryManager('astronauts');
      await thunk(mockDispatch);

      expect(fetchAnything).toHaveBeenCalledWith(apiUrls.astronauts);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    })
  })


})