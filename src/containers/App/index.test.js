import React, { Component } from 'react';
import App from './index';
import { shallow } from 'enzyme';
import { addUpcomingLaunches, addSelectedLaunch } from '../../actions';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import { mockLaunches } from '../../utils/mockData'


describe('App', () => {
  let defaultState = {
    error: '',
    loading: false
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< App />)
  })
})
