import React from 'react';
import { toggleLaunchInfo } from '../../actions'
import { shallow } from 'enzyme';
import { NextLaunch, mapDispatchToProps, mapStateToProps } from './index';
import { mockLaunches } from '../../utils/mockData';


describe('NextLaunch', () => {
  let mockRocketLaunch = mockLaunches.results[0];
  let mockShowInfo = false;
  let mockToggleLaunchInfo = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < NextLaunch
        rocketLaunch={ mockRocketLaunch }
        showInfo={ mockShowInfo }
        toggleLaunchInfo={ mockToggleLaunchInfo }
      />
    )
  })
})