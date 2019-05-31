import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import NextLaunchCard from '../../components/NextLaunchCard';

export class NextLaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      launches: []
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.rocketLaunches !== prevProps.rocketLaunches) {
      this.props.rocketLaunches.results
        .forEach(async launch => {
          const rocketUrl = launch.rocket.configuration.url;
          const result = await fetchAnything(rocketUrl);
          launch.rocket_image = result.image_url;
          Promise.all([launch])
            .then(card => this.setState({ 
              launches: [...this.state.launches, ...card] 
            }))
        })
    }
  }

  

  render() {
    return (
      <section className="next-launches-container">
        <h1>HIIIIII</h1>
        { this.state.launches.length && this.generateCards() }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  rocketLaunches: state.upcomingLaunches || []
})

export default connect(mapStateToProps)(NextLaunchesContainer);
