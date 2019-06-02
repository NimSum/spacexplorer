import React from 'react';
import { shallow } from 'enzyme';
import CountDownTimer from './index';


global.Date.getTime = jest.fn().mockImplementation(() => 10);
global.Date.now = jest.fn().mockImplementation(() => 1);

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
    expect(typeof wrapper.state().totalTime).toEqual('number');
  })

  it.skip('should calculate date difference', () => {
    const result = wrapper.instance().calculateDateDifference();
    const expected = 9;
    expect(result).toEqual(expected);
  })

  it('should calculate countdown and set it to state', () => {
    wrapper.setState({ totalTime: 100000000 });
    const expected = { 
      days: 1,
      hours: 1,
      minutes: 22,
      seconds: 40,
      totalTime: 100000000 
    }
    wrapper.instance().calculateCountdown();
    expect(wrapper.state()).toEqual(expected);
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should update timer every second', () => {
    jest.useFakeTimers();
    wrapper.instance().updateTime();
    jest.runAllTimers();
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  })  

})