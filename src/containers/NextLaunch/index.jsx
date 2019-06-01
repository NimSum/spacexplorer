import React from 'react';
import { connect } from 'react-redux';
import CountDownTimer from '../../components/CountDownTimer';
import NextLaunchInfo from '../NextLaunchInfo';
import { toggleLaunchInfo } from '../../actions'

export const NextLaunch = ({ rocketLaunch, showInfo, toggleLaunchInfo }) => {

  const generateLaunchCard = () => {
    const { name, status, pad, mission } = rocketLaunch;
    return (
      <article className="upcoming-launch-card">
        <h3>Next Rocket Launch:</h3>
        <h2>{ name }</h2>
        <p><span>Status: </span> { status.name }</p>
        <p><span>Mission Type: </span> { mission.id ? mission.type : 'Unknown' }</p>
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
      { generateLaunchCard() }
      { showInfo && < NextLaunchInfo /> }
      < CountDownTimer 
        date={ rocketLaunch.net }/>
      <img src={ rocketLaunch.rocket.configuration.image_url } alt="rocket" />
    </section>)
  : <div>LOOOOOOOODINGGGG</div>
}

export const mapStateToProps = state => ({
  rocketLaunch: state.selectedLaunch,
  showInfo: state.showLaunchInfo
})

export const mapDispatchToProps = dispatch => ({
  toggleLaunchInfo: (bool) => dispatch(toggleLaunchInfo(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunch);
