import React from 'react';
import { shallow } from 'enzyme';
import CountDownTimer from './index';

describe('CountDownTimer', () => {
  const mockDate = '2020-06-15T00:00:00Z';

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CountDownTimer 
        date={ mockDate } 
      />)
  })

 
})