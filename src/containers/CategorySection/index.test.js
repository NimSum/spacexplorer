import React, { Component } from 'react'
import { shallow, mount } from 'enzyme';
import categoryManager from '../../thunks/categoryManager';
import { CategorySection, mapDispatchToProps, mapStateToProps } from './index';
import { mockAstronauts } from '../../utils/mockData';
import AstronautCard from '../../components/AstronautCard';

Math.random = jest.fn().mockImplementation(() => 1);
jest.mock('../../thunks/categoryManager');

describe('CategorySection', () => {
  let mockAstronautsData = mockAstronauts;
  let checkAndUpdateSpy;
  let generateCardsSpy;
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
    generateCardsSpy = jest.spyOn(wrapper.instance(), 'generateCards');
  })

  afterEach(() => {
    checkAndUpdateSpy.mockClear();
    generateCardsSpy.mockClear();
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should set state "random" item, rendered cards from props on mounting', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state().cardInfoToRender).toEqual(mockAstronauts[1]);
    expect(wrapper.state().cardsToRender).toHaveLength(4)
  })

  it('should set state info card passed to showInfo method', () => {
    const expected = mockAstronauts.results[0];
    wrapper.instance().showInfo(mockAstronauts.results[0], true);
    expect(wrapper.state().cardInfoToRender).toEqual(expected);
    expect(wrapper.state().showInfo).toEqual(true);
  })

  it('should generateCards based results of categorySelected object', () => {
    const modified = { ...mockAstronauts };
    modified.results.pop();
    wrapper.instance().generateCards(modified);
    expect(wrapper.state().cardsToRender).toHaveLength(3)
  })

  it('cardSelector should return specifc card based on category', () => {
    const astronautSelected = mockAstronauts.results[2];
    const mockShowInfo = wrapper.instance().showInfo;
    const expected = < AstronautCard 
        astronaut={ astronautSelected }
        showInfo={ mockShowInfo }
        key={ astronautSelected.id} />
    const result = wrapper.instance().cardSelector(astronautSelected);
    expect(result).toEqual(expected);
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

  describe('checkAndUpdate', () => {
    it('should set state showInfo false', () => {
      wrapper.setState({ showInfo: true });
      wrapper.instance().checkAndUpdate();
      expect(wrapper.state().showInfo).toBe(false)
    })

    it('should trigger generateCards', () => {
      wrapper.instance().checkAndUpdate();
      expect(checkAndUpdateSpy).toHaveBeenCalledTimes(1)
    })

    it.skip('should set state card info to render', () => {
      wrapper.instance().checkAndUpdate();
      expect(wrapper.state().cardInfoToRender).toEqual(mockAstronauts.results[1])
    })

    it('should invoke selectCategory using correct params', () => {
      const modified = { ...mockAstronauts };
      modified.next = null;
      wrapper.setProps({ astronauts: modified })
      wrapper.instance().checkAndUpdate();
      expect(mockSelectCategory).toHaveBeenCalledWith('astronauts')
    })
  })

})