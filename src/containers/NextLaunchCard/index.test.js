import React from 'react';
import { toggleLaunchInfo, addSelectedLaunch } from '../../actions';
import { shallow } from 'enzyme';
import { NextLaunchCard, mapDispatchToProps, mapStateToProps } from './index';
import { mockLaunches } from '../../utils/mockData';

describe('NextLaunchCard', () => {
  let mockToggleLaunchInfo = jest.fn();
  let mockUpdateSelectedLaunch = jest.fn();
  let mockLaunch = mockLaunches.results[0];
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < NextLaunchCard
        launch={ mockLaunch }
        toggleLaunchInfo={ mockToggleLaunchInfo }
        updateSelectedLaunch={ mockUpdateSelectedLaunch }
        showInfo={ false }
      />
    )
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})