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

})
