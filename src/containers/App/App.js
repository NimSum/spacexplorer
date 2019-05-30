import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUpcomingLaunches } from '../../actions';
import fetchAnything from '../../utils/apiFetches/fetchAnything';

export class App extends Component {
  async componentDidMount() {
    const url = 'https://spacelaunchnow.me/api/3.3.1/launch/upcoming';
    const upcomingLaunches = await fetchAnything(url);
    this.props.addUpcomingLaunches(upcomingLaunches);
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUpcomingLaunches: launches => dispatch(addUpcomingLaunches(launches))
})

export default connect(null, mapDispatchToProps)(App);

