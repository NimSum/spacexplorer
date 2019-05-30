import React, { Component } from 'react';
import { connect } from 'react-redux';
export class NextLaunch extends Component {

  constructor() {
    super();
    this.state = {}
  }

  static getDerivedStateFromProps(newProp, currState) {
    if (!newProp) return null;
    const newId = newProp.rocketLaunch.id;
    const oldId = currState.id;
    switch(true) {
      case newId !== oldId:
        return {...newProp };
      default:
        return null;
    }
  }

  render() {
    return (
      <section>
        <h3>ROCKET LAUNCH</h3>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  rocketLaunch: state.upcomingLaunches.results 
    ? state.upcomingLaunches.results[0]
    : []
})



export default connect(mapStateToProps)(NextLaunch);
