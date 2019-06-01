import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import categoryManager from '../../thunks/categoryManager';

export class CategoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
  }

  generateMenu() {
    const callThunk = this.props.selectCategory;
    return (
      <nav>
        < NavLink 
          onClick={() => callThunk('rockets')}
          to='/rockets'>
          Rockets
        </NavLink>
        < NavLink 
          onClick={() => callThunk('spaceStations')}
          to='/space-stations'>
          Space Stations
        </NavLink>
        < NavLink 
          onClick={() => callThunk('orbiters')}
          to='/orbiters'>
          Orbiters
        </NavLink>
        < NavLink 
          onClick={() => callThunk('astronauts')}
          to='/astronauts'>
          Astronauts
        </NavLink>
        < NavLink 
          onClick={() => callThunk('launchProviders')}
          to='/launch-providers'>
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
  selectCategory: (category) => dispatch(categoryManager(category))
})

export default connect(null, mapDispatchToProps)(CategoryMenu);
