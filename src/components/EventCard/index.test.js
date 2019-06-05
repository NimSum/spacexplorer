import React from 'react';
import { shallow } from 'enzyme';
import { mockEvents } from '../../utils/mockData/index';
import EventCard from './index';
import { render, fireEvent, getByTestId} from "@testing-library/react";

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

  describe('hooks', () => {
    
    it('"show" state is false by default', () => {
      const { container } = render(< EventCard 
        event={ singleEvent }
      />)
      const showValue = getByTestId(container, 'container');
      expect(showValue.dataset.shown).toBe('false')
    })

    it('should toggle set state show on mouse enter true/false', () => {
      const { container } = render(< EventCard 
        event={ singleEvent }
      />)
      const showValue = getByTestId(container, 'container');
      fireEvent.mouseEnter(showValue);
      expect(showValue.dataset.shown).toBe('true')
      fireEvent.mouseLeave(showValue);
      expect(showValue.dataset.shown).toBe('false')
    })

  
  })
})