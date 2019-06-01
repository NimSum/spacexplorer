import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import NextLaunchCard from '../NextLaunchCard';
import NextLaunch from '../NextLaunch';

export class NextLaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      launches: [],
      showInfo: false
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.rocketLaunches !== prevProps.rocketLaunches) {
      this.setState({ launches: this.props.rocketLaunches.results })
    }
  }

  generateCards = () => {
    return this.state.launches.map(launch => (
      < NextLaunchCard 
        launch={ launch }
        key={ launch.id }
      />
    ))
  }

  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  render() {
    return (
      <section className="next-launches-container">
        <h1>HIIIIII</h1>
        < NextLaunch />
        <div>
          { this.state.launches.length && this.generateCards() }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  rocketLaunches: state.upcomingLaunches || []
})

export default connect(mapStateToProps)(NextLaunchesContainer);
