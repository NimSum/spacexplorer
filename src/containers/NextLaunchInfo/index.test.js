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

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match component snapshot with launches without mission', () => {
    const modifiedLaunch = { ...mockLaunches.results[0] };
    modifiedLaunch.mission = null;
    wrapper.setProps({ launchInfo: modifiedLaunch });
    expect(wrapper).toMatchSnapshot();
  })

  describe('Events', () => {
    it('should trigger hideInfo with the correct params on click', () => {
      wrapper.find('button').simulate('click');
      expect(mockHideInfo).toHaveBeenCalledWith(false);
    })

    it('should hideInfo with the correct params on mouse leave', () => {
      wrapper.find('article').simulate('mouseLeave');
      expect(mockHideInfo).toHaveBeenCalledWith(false);
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    it('should dispatch action with the correct params', () => {
      const propToDispatch = toggleLaunchInfo(false);
      mappedProps.hideInfo(false);
      expect(mockDispatch).toHaveBeenCalledWith(propToDispatch);
    })
  })

  describe('mapStateToProps', () => {
    const mockState = {
      selectedLaunch: mockLaunches.results[2],
    };
    const expected = {
      launchInfo: mockLaunches.results[2],
    }
    it('should map state from mock state', () => {
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })
  })
})