import React from 'react';
import { connect } from 'react-redux';
import CountDownTimer from '../../components/CountDownTimer';
import NextLaunchInfo from '../NextLaunchInfo';
import { toggleLaunchInfo } from '../../actions'
import defaulRocketImg from '../../images/default-rocket-img.svg';
import PropTypes from 'prop-types';

export const NextLaunch = ({ rocketLaunch, showInfo, toggleLaunchInfo }) => {
  const { name, status, pad, mission, rocket } = rocketLaunch;
  const generateLaunchCard = () => {
    return (
      <article className="upcoming-launch-card">
        <h3>Upcoming Rocket Launch:</h3>
        <h2>{ name }</h2>
        <p><span>Status: </span> { status.name }</p>
        <p><span>Mission Type: </span> { mission ? mission.type : 'Unknown' }</p>
        <p><span>Location: </span> { pad.location.name }</p>
        <button onClick={ () => 
          toggleLaunchInfo(true) }>
            More
        </button>
      </article>
    )
  }

  return rocketLaunch.id  
    ? (<section className='next-launch-container'>
      { !showInfo && generateLaunchCard() }
      { showInfo && < NextLaunchInfo /> }
      < CountDownTimer 
        date={ rocketLaunch.net }/>
      <img src={ rocket.configuration.image_url || defaulRocketImg } alt="rocket" />
    </section>)
    : <div>Loading...</div>;
}

export const mapStateToProps = state => ({
  rocketLaunch: state.selectedLaunch,
  showInfo: state.showLaunchInfo
})

export const mapDispatchToProps = dispatch => ({
  toggleLaunchInfo: (bool) => dispatch(toggleLaunchInfo(bool))
})

NextLaunch.propTypes = {
  rocketLaunch: PropTypes.object,
  showInfo: PropTypes.bool,
  toggleLaunchInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunch);
