import React from 'react';
import { shallow } from 'enzyme';
import { mockEvent } from '../../utils/mockData/index';
import EventCard from './index';

describe('EventCard', () => {
  let wrapper = shallow(
    < EventCard 
      event={ mockEvent }
    />
  )
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})