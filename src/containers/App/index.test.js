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
    loading: false
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

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  describe('componentDidMount', () => {
    it('should fetch data using correct params', () => {
      const expected = 'https://spacelaunchnow.me/api/3.3.1/launch/upcoming?mode=detailed';
      expect(fetchAnything).toHaveBeenCalledWith(expected);
    })
  
    it('should set state error when fetch fails', () => {
      const expected = new Error('Failed to Fetch');
      fetchAnything.mockImplementation(() => { throw expected });
      wrapper.instance().componentDidMount();
      expect(wrapper.state().error).toEqual(expected)
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
        const mappedAddUpcomingLaunches = addUpcomingLaunches(mockLaunches);
        mappedProps.addUpcomingLaunches(mockLaunches);
        expect(mockDispatch).toHaveBeenCalledWith(mappedAddUpcomingLaunches);
      })

      it('should should dispatch selected launch using correct params', () => {
        const mappedAddSelectedLaunch = addSelectedLaunch(mockLaunches.results[0])
        mappedProps.addSelectedLaunch(mockLaunches.results[0]);
        expect(mockDispatch).toHaveBeenCalledWith(mappedAddSelectedLaunch);
      })
  })

})
