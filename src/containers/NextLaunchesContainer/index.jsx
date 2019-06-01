import React, { Component } from 'react'
import { connect } from 'react-redux';
import NextLaunchCard from '../NextLaunchCard';
import NextLaunch from '../NextLaunch';

export class NextLaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false
    }
  }

  generateCards = () => {
    return this.props.rocketLaunches.results.map(launch => (
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
        < NextLaunch />
        <h3>Upcoming Launches</h3>
        <div className="card-container">
          { this.props.rocketLaunches.results && this.generateCards() }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  rocketLaunches: state.upcomingLaunches || []
})

export default connect(mapStateToProps)(NextLaunchesContainer);
