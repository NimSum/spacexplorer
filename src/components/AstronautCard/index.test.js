import React from 'react';
import { shallow } from 'enzyme';
import AstronautCard from './index';
import { mockAstronauts } from '../../utils/mockData/'

describe('AstronautCard', () => {
  const mockAstronaut = mockAstronauts.results[0];
  const mockShowInfo = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < AstronautCard 
        astronaut={ mockAstronaut }
        showInfo={ mockShowInfo }
      />)
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  it('should invoke showInfo on click using correct params', () => {
    wrapper.find('button').simulate('click');
    expect(mockShowInfo).toHaveBeenCalledWith(mockAstronaut);
  })

})

