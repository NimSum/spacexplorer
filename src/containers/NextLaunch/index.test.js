import React from 'react';
import { toggleLaunchInfo } from '../../actions'
import { shallow } from 'enzyme';
import { NextLaunch, mapDispatchToProps, mapStateToProps } from './index';
import { mockLaunches } from '../../utils/mockData';


describe('NextLaunch', () => {
  let mockRocketLaunch = mockLaunches.results[0];
  let mockToggleLaunchInfo = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < NextLaunch
        rocketLaunch={ mockRocketLaunch }
        showInfo={ false }
        toggleLaunchInfo={ mockToggleLaunchInfo }
      />
    )
  })
  
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot with showInfo set to true', () => {
    wrapper.setProps({ showInfo: true });
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot if there is no rocketLaunch prop', () => {
    wrapper.setProps({ rocketLaunch: {} });
    expect(wrapper).toMatchSnapshot();
  })

})