import React, { Component } from 'react';
import { connect } from 'react-redux';
export class NextLaunch extends Component {
  render() {
    return (
      <section>
        <h3>ROCKET LAUNCH</h3>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  launches: state.upcomingLaunches
})



export default connect(mapStateToProps)(NextLaunch);
