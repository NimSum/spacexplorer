import React from 'react';
import { connect } from 'react-redux';
import { toggleLaunchInfo, addSelectedLaunch } from '../../actions';

const NextLaunchCard = ({ launch, toggleLaunchInfo, updateSelectedLaunch }) => {
  const { name, pad, status, mission } = launch;
  const showSelectedLaunch = () => {
    toggleLaunchInfo(true);
    updateSelectedLaunch(launch);
  }
  return (
    <article className='next-launch-card'>
      <h3>{ name }</h3>
      <p>Orbit: { mission ? mission.orbit : 'Uknown' }</p>
      <p>Status: { status.name }</p>
      <p>Location: { pad.location.name }</p>
      <button onClick={ showSelectedLaunch }>
        More
      </button>
    </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleLaunchInfo: (bool) => dispatch(toggleLaunchInfo(bool)),
  updateSelectedLaunch: (launch) => dispatch(addSelectedLaunch(launch))
})

export default connect(null, mapDispatchToProps)(NextLaunchCard);
