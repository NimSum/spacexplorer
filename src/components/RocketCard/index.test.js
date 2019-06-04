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
      />)
  })


})
