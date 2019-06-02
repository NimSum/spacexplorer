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

  it('should trigger toggleLaunchInfo on click using correct params', () => {
    wrapper.find('button').simulate('click');
    expect(mockToggleLaunchInfo).toHaveBeenCalledWith(true);
    wrapper.setProps({ showInfo: true });
    wrapper.find('button').simulate('click');
    expect(mockToggleLaunchInfo).toHaveBeenCalledWith(false);
  })

  it('should trigger updateSelectedLaunch on click using correct params', () => {
    wrapper.find('button').simulate('click');
    expect(mockUpdateSelectedLaunch).toHaveBeenCalledWith(mockLaunch);
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    it('should dispatch toggleLaunchInfo action with the correct params', () => {
      const actionToDispatch = toggleLaunchInfo(true);
      mappedProps.toggleLaunchInfo(true);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
    
    it('should dispatch addSelectedLaunch action with the correct params', () => {
      const actionToDispatch = addSelectedLaunch(mockLaunch);
      mappedProps.updateSelectedLaunch(mockLaunch);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })



})