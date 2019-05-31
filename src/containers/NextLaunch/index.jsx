import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAnything from '../../utils/apiFetches/fetchAnything';
import CountDownTimer from '../../components/CountDownTimer';

export class NextLaunch extends Component {

  constructor() {
    super();
    this.state = {
      rocket: {},
      rocketLaunch: {},
      error: ''
    }
  }

  getRocketImage = async () => {
    const url = this.state.rocketLaunch.rocket.configuration.url;
    try {
      const rocket = await fetchAnything(url);
      this.setState({ rocket });
    } catch(error) {
      this.setState({ error });
    }
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.rocketLaunch.id;
    const newId = this.props.rocketLaunch.id;
    if (newId !== oldId) {
      this.setState({ ...this.props }, () => this.getRocketImage())
    }
  }

  

  render() {
    console.log(this.state.rocketLaunch)
    return (
      <section className='launch-card'>
        { this.state.rocketLaunch.url && 
          < CountDownTimer 
            date={ this.state.rocketLaunch.net }/>
        }
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
  rocketLaunch: state.selectedLaunch
})

export default connect(mapStateToProps)(NextLaunch);
