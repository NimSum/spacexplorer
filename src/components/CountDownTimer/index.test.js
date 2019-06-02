import React from 'react';
import { shallow } from 'enzyme';
import CountDownTimer from './index';

describe('CountDownTimer', () => {
  const mockDate = '2019-06-15T00:00:00Z';

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CountDownTimer 
        date={ mockDate } 
      />)
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should should set state calculated difference on mount', () => {
    expect(typeof wrapper.state().totalTime).toEqual('number')
  })
})