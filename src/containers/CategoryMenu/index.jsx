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
        < NavLink to='/rockets'>
          Rockets
        </NavLink>
        < NavLink to='/space-stations'>
          Space Stations
        </NavLink>
        < NavLink to='/orbiters'>
          Orbiters
        </NavLink>
        < NavLink to='/astronauts'>
          Astronauts
        </NavLink>
        < NavLink to='/launch-providers'>
          Launch Providers
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
