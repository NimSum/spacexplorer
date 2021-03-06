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
import apiUrls from '../../utils/apiFetches/apiUrls';
import { addUpcomingLaunches, addSelectedLaunch } from '../../actions';
import rocketLaunchGif from '../../images/rocket-launch.gif';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      isLoading: false
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      const upcomingLaunches = await fetchAnything(apiUrls.upcomingLaunches);
      this.props.addUpcomingLaunches(upcomingLaunches);
      this.props.addSelectedLaunch(upcomingLaunches.results[0])
      this.setState({ isLoading: false })
    } catch(error) {
      this.setState({ error: error.message })
    }
  }

  loadingAndErrorPage() {
    return (
      <section className='app-loading'>
        { this.state.error 
        ? <h2 className='errored'>{ this.state.error }</h2> 
        : (<article>
            <img src={ rocketLaunchGif } alt="loading gif"/>
            <h2>Loading...</h2>
          </article>) }
      </section>
    )
  }

  render() {
    
    if (this.state.isLoading) return this.loadingAndErrorPage();
    
    return (
      <main>
        < CategoryMenu />
        < AsideEvents />
        < Switch >
          < Route exact path='/'
            component={ NextLaunchesContainer}/>
          < Route 
            exact path='/about/:category' 
            render={({ match }) => {
              const paths=[
                'rockets',
                'astronauts',
                'space_stations',
                'orbiters',
                'launch_providers'
              ]
              return paths.includes(match.params.category)
                ? (< CategorySection 
                    category={ match.params.category }/>)
                : ( <Page404 />)
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

