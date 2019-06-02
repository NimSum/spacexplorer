import React from 'react';
import { shallow } from 'enzyme';
import Page404 from './index';

describe('Page404', () => {
  let wrapper = shallow(< Page404 />)
  
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})