import * as action from '../actions';
import * as mockData from '../utils/mockData';
import fetchAnything from '../utils/apiFetches/fetchAnything';
import categoryManager from './categoryManager';
import apiUrls from '../utils/apiFetches/apiUrls';

jest.mock('../utils/apiFetches/fetchAnything');

describe('categoryManager thunk', () => {

  const mockDispatch = jest.fn();
  let thunk;

  it('should catch errors if any of the fetches fail', async () => {
    fetchAnything.mockImplementation(() => Promise.reject('Failed to fetch')); 
    thunk = categoryManager('astronauts');
    const result = await thunk(mockDispatch);
    expect(result).toEqual('Failed to fetch');
  })


})