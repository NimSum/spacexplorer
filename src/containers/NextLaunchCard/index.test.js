import React from 'react';
import { toggleLaunchInfo, addSelectedLaunch } from '../../actions';
import { shallow } from 'enzyme';
import { NextLaunchCard, mapDispatchToProps, mapStateToProps } from './index';

describe('NextLaunchCard', () => {
  let mockToggleLaunchInfo = jest.fn();
  let mockUpdateSelectedLaunch = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < NextLaunchCard
        toggleLaunchInfo={ mockToggleLaunchInfo }
        updateSelectedLaunch={ mockUpdateSelectedLaunch }
        showInfo={ false }
      />
    )
  })
})