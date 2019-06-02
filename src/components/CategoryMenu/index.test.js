import React, { Component } from 'react'
import { shallow } from 'enzyme';
import CategoryMenu from './index';

describe('CategoryMenu', () => {
  const defaultState = {
    loading: false,
    error: '',
    events: []
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< CategoryMenu />)
  })
})