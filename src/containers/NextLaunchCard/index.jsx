import React from 'react';
import { connect } from 'react-redux';
import { toggleLaunchInfo, addSelectedLaunch } from '../../actions';

const NextLaunchCard = ({ launch, toggleLaunchInfo, updateSelectedLaunch }) => {
  const { pad, status, mission, rocket } = launch;
  const showSelectedLaunch = () => {
    toggleLaunchInfo(true);
    updateSelectedLaunch(launch);
  }
  return (
    <article className='next-launch-card'>
      <div className="image-side">
        <h3>{ rocket.configuration.name }</h3>
        <img src={ rocket.configuration.image_url } alt="rocket" />
      </div>
      <div className="info-side">    
        <h3>{ launch.net }</h3>
        <p>Mission: { mission ? mission.name : 'Unknown' }</p>  
        <p>Orbit: { mission ? mission.orbit : 'Uknown' }</p>
        <p>Status: { status.name }</p>
        <p>Location: { pad.location.name }</p>
        <button onClick={ showSelectedLaunch }>
          More
        </button>
      </div>
    </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleLaunchInfo: (bool) => dispatch(toggleLaunchInfo(bool)),
  updateSelectedLaunch: (launch) => dispatch(addSelectedLaunch(launch))
})

export default connect(null, mapDispatchToProps)(NextLaunchCard);
