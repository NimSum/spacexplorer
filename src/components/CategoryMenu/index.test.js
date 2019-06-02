import React, { Component } from 'react'
import { shallow } from 'enzyme';
import CategoryMenu from './index';

describe('CategoryMenu', () => {
  const defaultState = {
    showMenu: false
  }

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< CategoryMenu />)
  })
  
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })
})