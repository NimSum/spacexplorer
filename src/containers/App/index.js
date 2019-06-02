import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AsideEvents from '../AsideEvents';
import CategoryMenu from '../../components/CategoryMenu'
import NextLaunchesContainer from '../NextLaunchesContainer';
import Page404 from '../../components/Page404';
import CategorySection from '../CategorySection';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import { addUpcomingLaunches, addSelectedLaunch } from '../../actions';

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
      const url = 'https://spacelaunchnow.me/api/3.3.1/launch/upcoming?mode=detailed';
      const upcomingLaunches = await fetchAnything(url);
      this.props.addUpcomingLaunches(upcomingLaunches);
      this.props.addSelectedLaunch(upcomingLaunches.results[0])
      this.setState({ loading: false })
    } catch(error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <main>
        < CategoryMenu />
        < AsideEvents />
        < Switch >
          < Route exact path='/'
            component={ NextLaunchesContainer}/>
          < Route path='/about/:category' render={({ match }) => {
              return (
                < CategorySection 
                  category={ match.params.category }/>
              )
          }}/>
          < Route component={ Page404 } />
        </Switch>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addUpcomingLaunches: launches => dispatch(addUpcomingLaunches(launches)),
  addSelectedLaunch: event => dispatch(addSelectedLaunch(event)),
})

App.propTypes = {
  addSelectedLaunch: PropTypes.func,
  addUpcomingLaunches: PropTypes.func
}

export default connect(null, mapDispatchToProps)(App);

