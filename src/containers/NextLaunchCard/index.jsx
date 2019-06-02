import React from 'react';
import { connect } from 'react-redux';
import { toggleLaunchInfo, addSelectedLaunch } from '../../actions';
import moment from 'moment';
import defaultRocketImage from '../../images/default-rocket-img.svg';
import PropTypes from 'prop-types';

const NextLaunchCard = ({ showInfo, launch, toggleLaunchInfo, updateSelectedLaunch }) => {
  const { pad, status, mission, rocket } = launch;
  const readableDate = moment(launch.net).format('MMM DD LT');

  const showSelectedLaunch = () => {
    showInfo ? toggleLaunchInfo(false) : toggleLaunchInfo(true);
    updateSelectedLaunch(launch);
  }

  return (
    <article className='next-launch-card'>
      <div className="image-side">
        <h3>{ rocket.configuration.name }</h3>
        <img src={ rocket.configuration.image_url || defaultRocketImage } alt="rocket" />
      </div>
      <div className="info-side">    
        <h3>{ readableDate }</h3>
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

export const mapStateToProps = state => ({
  showInfo: state.showLaunchInfo
})

export const mapDispatchToProps = dispatch => ({
  toggleLaunchInfo: (bool) => dispatch(toggleLaunchInfo(bool)),
  updateSelectedLaunch: (launch) => dispatch(addSelectedLaunch(launch))
})

NextLaunchCard.propTypes = {
  showInfo: PropTypes.bool,
  toggleLaunchInfo: PropTypes.func,
  updateSelectedLaunch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchCard);
