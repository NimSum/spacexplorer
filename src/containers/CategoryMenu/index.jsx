import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export class CategoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
  }

  generateMenu() {
    return (
      <nav>
        < NavLink to='/about/rockets'>
          Rockets
        </NavLink>
        < NavLink to='/about/space_stations'>
          Space Stations
        </NavLink>
        < NavLink to='/about/orbiters'>
          Orbiters
        </NavLink>
        < NavLink to='/about/astronauts'>
          Astronauts
        </NavLink>
        < NavLink to='/about/launch_providers'>
          Launch Providers
        </NavLink>
        < NavLink to='/'>
          Upcoming Launches
        </NavLink>
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
        onMouseLeave={ () => this.showMenu(false) }>
        { this.state.showMenu 
            ? this.generateMenu()
            : <p>Xplore Space</p>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(null, mapDispatchToProps)(CategoryMenu);
