import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AsideEvents from '../AsideEvents';
import Page404 from '../../components/Page404';
import NextLaunch from '../NextLaunch';
import { connect } from 'react-redux';
import { addUpcomingLaunches } from '../../actions';
import fetchAnything from '../../utils/apiFetches/fetchAnything';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      loading: false
    }
  }
  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const url = 'https://spacelaunchnow.me/api/3.3.1/launch/upcoming';
    const upcomingLaunches = await fetchAnything(url);
    this.props.addUpcomingLaunches(upcomingLaunches);
      this.setState({ loading: false })
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <main>
        < AsideEvents />
        < Switch >
          < Route exact path='/' render={ () => (
            <div>
              < NextLaunch />
              <h2>Upcoming Launch</h2>
            </div>
            )}/>
          < Route component={ Page404 } />
        </Switch>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUpcomingLaunches: launches => dispatch(addUpcomingLaunches(launches))
})

export default connect(null, mapDispatchToProps)(App);

