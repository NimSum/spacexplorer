import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchAnything from '../../utils/apiFetches/fetchAnything';

export class NextLaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      cardsArray: []
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.rocketLaunches !== prevProps.rocketLaunches) {
      this.props.rocketLaunches.results
        .forEach(async launch => {
          const rocketUrl = launch.rocket.configuration.url;
          const result = await fetchAnything(rocketUrl);
          launch.rocket_image = result.image_url;
          Promise.all([result])
            .then(card => this.setState({ 
              cardsArray: [...this.state.cardsArray, ...card] 
            }))
        })
    }
  }

  render() {
    return (
      <section className="next-launches-container">
        <h1>HIIIIII</h1>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  rocketLaunches: state.upcomingLaunches || []
})

export default connect(mapStateToProps)(NextLaunchesContainer);
