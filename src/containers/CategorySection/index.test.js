import React, { Component } from 'react'
import { shallow } from 'enzyme';
import categoryManager from '../../thunks/categoryManager';
import { CategorySection, mapDispatchToProps, mapStateToProps } from './index';
import { mockAstronauts } from '../../utils/mockData';

describe('CategorySection', () => {
  const defaultState = {
    cardsToRender: [],
    cardInfoToRender: {},
    showInfo: false
  }
  let mockAstronauts = mockAstronauts;
  let mockCategory = 'astronauts';
  let mockSelectCategory = jest.fn();
  let mockLaunch_providers = {};
  let mockOrbiters = {};
  let mockRockets = {};
  let mockSpace_stations = {};
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      < CategorySection 
        astronauts={ mockAstronauts }
        category={ mockCategory }
        selectCategory={ mockSelectCategory }
        launch_providers={ mockLaunch_providers }
        orbiters={ mockOrbiters }
        rockets={ mockRockets }
        space_stations={ mockSpace_stations }
      />
    )
  })

  
})