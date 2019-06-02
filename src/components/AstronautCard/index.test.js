import React from 'react';
import { shallow } from 'enzyme';
import AstronautCard from './index';
import { mockAstronaut } from '../../utils/mockData/'

describe('AstronautCard', () => {
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


})

