import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

export class CategoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
  }

  generateMenu() {
    const linkStyling = { 
      textDecoration: 'none',
      color: '#FFEAFE',
      padding: '5px',
      borderBottom: '1px solid #9EA9F0'
    }
    return (
      <nav>
        < NavLink 
          style={ linkStyling } 
          to='/about/rockets'
          activeClassName='is-active'>
            <span>Rockets</span>
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/space_stations'
          activeClassName='is-active'>
            <span>Space Stations</span>
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/orbiters'
          activeClassName='is-active'>
            <span>Orbiters</span>
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/astronauts'
          activeClassName='is-active'>
            <span>Astronauts</span>
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/launch_providers'
          activeClassName='is-active'>
            <span>Launch Providers</span>
        </NavLink>
        < Link 
          style={ linkStyling } 
          to='/'>
          <span>HOME</span>
        </Link>
      </nav>
    )
  }

  showMenu = (bool) => {
    this.setState({ showMenu: bool })
  }

  render() {
    return (
      <div 
        className='menu-container'
        onMouseEnter={ () => this.showMenu(true) }
        onMouseLeave={ () => this.showMenu(false) }
        >
        <p className={ this.state.showMenu ? 'hovered' : undefined }>Explore Space </p>
        { this.state.showMenu && this.generateMenu()}
      </div>
    )
  }
}

export default CategoryMenu;
