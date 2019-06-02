import React from 'react';
import { shallow } from 'enzyme';
import { mockEvents } from '../../utils/mockData/index';
import EventCard from './index';

describe('EventCard', () => {
  const singleEvent = mockEvents.results[0]
  let wrapper = shallow(
    < EventCard 
      event={ singleEvent }
    />
  )
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})