import React from 'react';
import { NextLaunchesContainer, mapStateToProps } from './index';
import { shallow } from 'enzyme';
import { mockLaunches } from '../../utils/mockData';
import NextLaunchCard from '../NextLaunchCard';

describe('NextLaunchesContainer', () => {
  const defaultState = { showInfo: false }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < NextLaunchesContainer
        rocketLaunches={ mockLaunches }
      />
    )
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  it('should generate launch cards', () => {
    const modifiedData = { ...mockLaunches };
    modifiedData.results = [mockLaunches.results[0]];
    const expected = [
      < NextLaunchCard 
        launch={modifiedData.results[0] } 
        key={ modifiedData.results[0].id }/>
    ];
    wrapper.setProps({ rocketLaunches: modifiedData });
    const result = wrapper.instance().generateCards();
    expect(result).toEqual(expected);
  })

  it('should be able to toggle showInfo state', () => {
    wrapper.instance().toggleInfo();
    expect(wrapper.state().showInfo).toBe(true);
    wrapper.instance().toggleInfo();
    expect(wrapper.state().showInfo).toBe(false);
  })
})