import React from 'react';
import { NextLaunchesContainer, mapStateToProps } from './index';
import { shallow } from 'enzyme';
import { mockLaunches } from '../../utils/mockData';
import NextLaunchCard from '../NextLaunchCard';

describe('NextLaunchesContainer', () => {
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
})