import React from 'react';
import { toggleLaunchInfo } from '../../actions'
import { shallow } from 'enzyme';
import { NextLaunchInfo, mapDispatchToProps, mapStateToProps } from './index';
import { mockLaunches } from '../../utils/mockData';

describe('NextLaunchInfo', () => {
  let mockLaunchInfo = mockLaunches.results[0];
  let mockHideInfo = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < NextLaunchInfo
        launchInfo={ mockLaunchInfo }
        hideInfo={ mockHideInfo }
      />
    )
  })
})