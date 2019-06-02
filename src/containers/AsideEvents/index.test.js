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
  let stateAfterMounted = {
    loading: false,
    error: '',
    events: mockEvents.results
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < AsideEvents
        addUpcomingEvents={ mockAddUpcomingEvents }
      />
    )
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have state', () => {
    expect(wrapper.state()).toEqual(stateAfterMounted);
  })

  describe('componentDidMount', () => {
    it('should call fetchAnything using correct params', () => {
      const url = 'https://spacelaunchnow.me/api/3.3.1/event/upcoming'
      expect(fetchAnything).toHaveBeenCalledWith(url);
    })

    it('should invoke addUpcomingEvents prop with the correct params', () => {
      expect(mockAddUpcomingEvents).toHaveBeenCalledWith(mockEvents)
    })

    it('should set state error when fetch fails', async () => {
      fetchAnything.mockImplementation(() => Promise.reject('Failed to fetch'));
      await wrapper.instance().componentDidMount();
      expect(wrapper.state().error).toEqual('Failed to fetch');
    })
  })


})