import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDownTimer from '../../components/CountDownTimer';
import NextLaunchInfo from '../NextLaunchInfo';
import { toggleLaunchInfo } from '../../actions'

export class NextLaunch extends Component {

  constructor() {
    super();
    this.state = {
      rocketLaunch: {},
      error: ''
    }
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.rocketLaunch.id;
    const newId = this.props.rocketLaunch.id;
    if (newId !== oldId) {
      this.setState({ ...this.props })
    }
  }

  generateLaunchCard() {
    const { name, status, pad, mission } = this.state.rocketLaunch;
    return (
      <article>
        <p>{ name }</p>
        <p>{ status.name }</p>
        <p>{ mission ? mission.orbit : 'Unknown' }</p>
        <p>{ pad.location.name }</p>
        <button onClick={ () => 
          this.props.toggleLaunchInfo(true) }>
            More
        </button>
      </article>
    )
  }

  render() {
    return this.state.rocketLaunch.id 
    ? (<section className='launch-card'>
        { this.generateLaunchCard() }
        { this.props.showInfo && < NextLaunchInfo /> }
        < CountDownTimer 
          date={ this.state.rocketLaunch.net }/>
        <img src={ this.state.rocketLaunch.rocket.configuration.image_url } alt="rocket" />
      </section>)
    : <div>HI</div>
  }
}

export const mapStateToProps = state => ({
  rocketLaunch: state.selectedLaunch,
  showInfo: state.showLaunchInfo
})

export const mapDispatchToProps = dispatch => ({
  toggleLaunchInfo: (bool) => dispatch(toggleLaunchInfo(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunch);
