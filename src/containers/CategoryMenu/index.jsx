import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
          Rockets
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/space_stations'
          activeClassName='is-active'>
          Space Stations
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/orbiters'
          activeClassName='is-active'>
          Orbiters
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/astronauts'
          activeClassName='is-active'>
          Astronauts
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/launch_providers'
          activeClassName='is-active'>
          Launch Providers
        </NavLink>
        < Link 
          style={ linkStyling } 
          to='/'>
          HOME
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

const mapDispatchToProps = dispatch => ({
})

export default connect(null, mapDispatchToProps)(CategoryMenu);
