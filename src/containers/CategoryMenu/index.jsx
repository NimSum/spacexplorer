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
          activeStyle='is-active'>
          Rockets
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/space_stations'
          activeStyle='is-active'>
          Space Stations
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/orbiters'
          activeStyle='is-active'>
          Orbiters
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/astronauts'
          activeStyle='is-active'>
          Astronauts
        </NavLink>
        < NavLink 
          style={ linkStyling } 
          to='/about/launch_providers'
          activeStyle='is-active'>
          Launch Providers
        </NavLink>
        < Link 
          style={ linkStyling } 
          to='/'
          activeStyle='is-active'>
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
        <p className={ this.state.showMenu && 'hovered'}>Explore Space </p>
        { this.state.showMenu && this.generateMenu()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(null, mapDispatchToProps)(CategoryMenu);
