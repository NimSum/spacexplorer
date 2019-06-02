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

  it('should match snapshot with menu shown', () => {
    wrapper.setState({ showMenu: true });
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  it('should set state showMenu based on param', () => {
    wrapper.instance().showMenu(true);
    expect(wrapper.state().showMenu).toBe(true);
    wrapper.instance().showMenu(false);
    expect(wrapper.state().showMenu).toBe(false);
  })

  it('should set state showMenu to true on mouseEnter', () => {
    wrapper.find('div.menu-container').simulate('mouseEnter');
    expect(wrapper.state().showMenu).toBe(true);
  })

  it('should set state showMenu to false on mouseLeave', () => {
    wrapper.find('div.menu-container').simulate('mouseLeave');
    expect(wrapper.state().showMenu).toBe(false);
  })
})