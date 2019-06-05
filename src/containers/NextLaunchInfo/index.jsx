import React from 'react'
import { connect } from 'react-redux';
import { toggleLaunchInfo } from '../../actions'
import PropTypes from 'prop-types';

export const NextLaunchInfo  = ({ launchInfo, hideInfo }) => {
  const { name, rocket, mission } = launchInfo;
    return (
      <article 
        className='next-launch-info-card'
        onMouseLeave={ () => 
        hideInfo(false) }
      >
        <h2>{ name }</h2>
        <div className="mission">
          <h3>Mission Description:</h3>
          <p>Type: <span>{ mission ? mission.type : 'Unknown' }</span></p>
          <p><span>{ mission ? mission.description : 'Unknown' }</span></p>
          <a href={ launchInfo.slug }>Space Launch Now Info</a>
        </div>
        <div className="rocket-provider">
          <h3>Rocket: <span>{ rocket.configuration.name }</span></h3>
          <p>Thrust: <span>{ rocket.configuration.to_thrust }kN</span></p>
          <p>Height:  <span>{ rocket.configuration.length }M</span> Width: <span>{ rocket.configuration.diameter }M</span></p>
          <a href={ rocket.configuration.wiki_url }>Rocket Wiki</a>
          <h3>Launch Provider: <span>{ rocket.configuration.launch_service_provider.name }</span></h3>
          <p><span>{ rocket.configuration.launch_service_provider.description }</span></p>
          <a href={ rocket.configuration.launch_service_provider.info_url }>Provider Website</a>
        </div>
        <button onClick={ () => 
          hideInfo(false) }>
            x
        </button>
      </article>
    )
}

export const mapStateToProps = state => ({
  launchInfo: state.selectedLaunch
})

export const mapDispatchToProps = dispatch => ({
  hideInfo: (bool) => dispatch(toggleLaunchInfo(bool))
})

NextLaunchInfo.propTypes = {
  launchInfo: PropTypes.object,
  hideInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchInfo);
