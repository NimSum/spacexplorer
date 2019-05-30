import React from 'react'
import { connect } from 'react-redux';

const NextLaunchesContainer = (props) => {
    return (
      <section className="next-launches-container">
        <h1>HIIIIII</h1>
      </section>
    )
}

const mapStateToProps = state => ({
  rocketLaunches: state.upcomingLaunches
})

export default connect(mapStateToProps)(NextLaunchesContainer);
