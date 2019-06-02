import React, { Component } from 'react'
import { shallow } from 'enzyme';
import categoryManager from '../../thunks/categoryManager';
import { CategorySection, mapDispatchToProps, mapStateToProps } from './index';
import { mockAstronauts } from '../../utils/mockData';

Math.random = jest.fn().mockImplementation(() => 1);

describe('CategorySection', () => {
  let mockAstronautsData = mockAstronauts;
  let checkAndUpdateSpy;
  let mockCategory = 'astronauts';
  let mockSelectCategory = jest.fn();
  let mockLaunch_providers = {};
  let mockOrbiters = {};
  let mockRockets = {};
  let mockSpace_stations = {};
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CategorySection 
        astronauts={ mockAstronautsData }
        category={ mockCategory }
        selectCategory={ mockSelectCategory }
        launch_providers={ mockLaunch_providers }
        orbiters={ mockOrbiters }
        rockets={ mockRockets }
        space_stations={ mockSpace_stations }
      />
    )
    checkAndUpdateSpy = jest.spyOn(wrapper.instance(), 'checkAndUpdate');
  })

  afterEach(() => {
    checkAndUpdateSpy.mockClear();
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should set state "random" item, rendered cards from props on mounting', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state().cardInfoToRender).toEqual(mockAstronauts[1]);
    expect(wrapper.state().cardsToRender).toHaveLength(4)
  })

  describe('component DidMount & Update', () => {
    it('should trigger checkAndUpdate spy on component mount', () => {
      wrapper.instance().componentDidMount();
      expect(checkAndUpdateSpy).toHaveBeenCalledTimes(1)
    })
    it('should trigger checkAndUpdate spy on component update', () => {
      wrapper.setProps({ category: 'rockets' })
      expect(checkAndUpdateSpy).toHaveBeenCalledTimes(1)
    })
  })
})