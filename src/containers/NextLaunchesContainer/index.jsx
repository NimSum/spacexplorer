import React, { Component } from 'react'
import { connect } from 'react-redux';
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
  
  // componentDidUpdate(prevProps) {
  //   if (this.props.rocketLaunches !== prevProps.rocketLaunches) {
  //     this.setState({ launches: this.props.rocketLaunches.results })
  //   }
  // }

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
        <div>
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
