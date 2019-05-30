import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
export class NextLaunch extends Component {

  constructor() {
    super();
    this.state = {
      rocket: {},
      rocketLaunch: {},
      rocketLaunches: []
    }
  }

  getRocketImage = async () => {
    const url = this.state.rocketLaunch.rocket.configuration.url;
    const rocket = await fetchAnything(url);
    const img = rocket.image_url;
    this.setState({ rocket });
    return img;
  }


  componentDidUpdate(prevProps) {
    const newId = prevProps.rocketLaunch.id;
    const oldId = this.props.rocketLaunch.id;
    switch(true) {
      case newId !== oldId:
        this.setState({ ...this.props }, () => this.getRocketImage())
        break;
      default:
        return null;
    }
  }

  render() {
    return (
      <section className='launch-card'>
        { this.state.rocketLaunch && 
          (<article>
            <p>Next Rocket Launch</p>
            <h3>{ this.state.rocketLaunch.name }</h3>
            <img src={this.state.rocket.image_url} alt="rocket" />
          </article>)
        }
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  rocketLaunch: state.upcomingLaunches.results 
    ? state.upcomingLaunches.results[0]
    : {},
  rocketLaunches: state.upcomingLaunches.results || []
})



export default connect(mapStateToProps)(NextLaunch);
