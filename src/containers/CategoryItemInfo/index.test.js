import React from 'react';
import { shallow } from 'enzyme';
import { CategoryItemInfo, mapStateToProps } from './index';
import { mockRockets } from '../../utils/mockData';
import { mockAstronauts } from '../../utils/mockData';

describe('CategoryItemInfo', () => {
  let item = mockRockets.results[2];
  let category = 'rockets';
  let isLoading = false;
  let hasErrored = '';

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CategoryItemInfo
        item={ item }
        category={ category }
        isLoading={ isLoading }
        hasErrored={ hasErrored }
      />
    )
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match component snapshot when data is loading', () => {
    wrapper.setProps({ isLoading: true, item: {} })
    expect(wrapper).toMatchSnapshot();
  })

  it('should render different item info based on category', () => {
    wrapper.setProps({ item: mockAstronauts.results[1], category: 'astronauts' })
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    const mockState = {
      isLoading: true,
      hasErrored: 'Failed to get space stuff :( '
    };
    const expected = {
      isLoading: true,
      hasErrored: 'Failed to get space stuff :( '
    }
    it('should map state from mock state', () => {
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })
  })
})