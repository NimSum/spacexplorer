import React from 'react';
import { shallow } from 'enzyme';
import RocketCard from './index';
import { mockRockets } from '../../utils/mockData/'

describe('RocketCard', () => {
  const mockAstronaut = mockRockets.results[1];
  const mockShowInfo = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < RocketCard 
        rocket={ mockAstronaut }
        showInfo={ mockShowInfo }
        detailed={ false }
      />)
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match component snapshot for detailed card', () => {
    wrapper.setProps({ detailed: true });
    expect(wrapper).toMatchSnapshot();
  })
  
  it('should invoke showInfo on click using correct params', () => {
    wrapper.find('button').simulate('click');
    expect(mockShowInfo).toHaveBeenCalledWith(mockAstronaut);
  })

})
