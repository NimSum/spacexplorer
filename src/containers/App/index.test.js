import React, { Component } from 'react';
import { App, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';
import { addUpcomingLaunches, addSelectedLaunch } from '../../actions';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import { mockLaunches } from '../../utils/mockData'

jest.mock('../../utils/apiFetches/fetchAnything.js');
fetchAnything.mockImplementation(() => mockLaunches);

describe('App', () => {
  let defaultState = {
    error: '',
    isLoading: false
  }
  let wrapper;
  let mockAddUpcomingLaunches = jest.fn();
  let mockAddSelectedLaunch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      < App 
        addUpcomingLaunches={ mockAddUpcomingLaunches }
        addSelectedLaunch={ mockAddSelectedLaunch }
      />
    )
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render loading element', () => {
    wrapper.setState({ isLoading: true });
    expect(wrapper).toMatchSnapshot();
  })

  it('should render error element', () => {
    wrapper.setState({ isLoading: true, error: 'Failed to Fetch' });
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  describe('componentDidMount', () => {
    it('should fetch data using correct params', () => {
      const expected = 'https://spacelaunchnow.me/api/3.3.1/launch/upcoming?mode=detailed';
      expect(fetchAnything).toHaveBeenCalledWith(expected);
    })
  
    it('should set state error when fetch fails', async () => {
      fetchAnything.mockImplementation(() => Promise.reject({ message: 'Failed to fetch' }));
      await wrapper.instance().componentDidMount();
      expect(wrapper.state().error).toEqual('Failed to fetch')
    })

    it('should pass data fetched to props', () => {
      expect(mockAddUpcomingLaunches).toHaveBeenCalledWith(mockLaunches);
      expect(mockAddSelectedLaunch).toHaveBeenCalledWith(mockLaunches.results[0]);
    })
  })

  describe('mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);

      it('should should dispatch launches using correct params', () => {
        const actionToDispatch = addUpcomingLaunches(mockLaunches);
        mappedProps.addUpcomingLaunches(mockLaunches);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })

      it('should should dispatch selected launch using correct params', () => {
        const addUpcomingEvents = addSelectedLaunch(mockLaunches.results[0])
        mappedProps.addSelectedLaunch(mockLaunches.results[0]);
        expect(mockDispatch).toHaveBeenCalledWith(addUpcomingEvents);
      })
  })

})
