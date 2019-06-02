import React, { Component } from 'react'
import { connect } from 'react-redux';
import NextLaunchCard from '../NextLaunchCard';
import NextLaunch from '../NextLaunch';
import PropTypes from 'prop-types';

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
        <h3 className="next-launches-title">Upcoming Launches</h3>
        <div className="card-container">
          { this.props.rocketLaunches.results && this.generateCards() }
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  rocketLaunches: state.upcomingLaunches || {}
})

NextLaunchesContainer.propTypes = {
  rocketLaunches: PropTypes.object
}

export default connect(mapStateToProps)(NextLaunchesContainer);
