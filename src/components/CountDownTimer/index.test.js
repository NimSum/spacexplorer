import React from 'react';
import { shallow } from 'enzyme';
import CountDownTimer from './index';

describe('CountDownTimer', () => {
  const mockDate = '20120-06-15T00:00:00Z';

  let spyCalcDifference;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CountDownTimer 
        date={ mockDate } 
      />)
    spyCalcDifference = jest.spyOn(wrapper.instance(), 'calculateDateDifference')
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should should set state calculated difference on mount', () => {
    wrapper.instance().componentDidMount();
    expect(typeof wrapper.state().totalTime).toEqual('number');
    expect(spyCalcDifference).toHaveBeenCalledTimes(1)
  })

  it('should re-calculate difference with updated date prop', () => {
    const date = '2021-06-15T00:00:00Z';
    wrapper.setProps({ date });
    expect(spyCalcDifference).toHaveBeenCalledTimes(1);
  })
})