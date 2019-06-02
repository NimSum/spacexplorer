import React, { Component } from 'react'
import { shallow } from 'enzyme';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import { addSpaceEvents } from '../../actions';
import { mockEvents } from '../../utils/mockData';
import { AsideEvents, mapDispatchToProps } from './index';

jest.mock('../../utils/apiFetches/fetchAnything');
fetchAnything.mockImplementation(() => mockEvents);

describe('AsideEvents', () => {
  let mockAddUpcomingEvents = jest.fn();

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < AsideEvents
        addUpcomingEvents={ mockAddUpcomingEvents }
      />
    )
  })
})