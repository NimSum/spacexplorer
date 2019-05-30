import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUpcomingLaunches } from '../../actions';
import fetchAnything from '../../utils/apiFetches/fetchAnything';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }
  async componentDidMount() {
    try {
      const url = 'https://spacelaunchnow.me/api/3.3.1/launch/upcoming';
    // const upcomingLaunches = await fetchAnything(url);
    // this.props.addUpcomingLaunches(upcomingLaunches);
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <main>
        <h1>Hello</h1>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUpcomingLaunches: launches => dispatch(addUpcomingLaunches(launches))
})

export default connect(null, mapDispatchToProps)(App);

