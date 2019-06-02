import React from 'react'
import { connect } from 'react-redux';
import { toggleLaunchInfo } from '../../actions'
import PropTypes from 'prop-types';

const NextLaunchInfo  = ({ launchInfo, hideInfo }) => {
  const { name, rocket, mission, pad } = launchInfo;
    return (
      <article 
        className='next-launch-info-card'
        onMouseLeave={ () => 
        hideInfo(false) }
      >
        <h2>{ name }</h2>
        <div className="mission">
          <h3>Mission Description:</h3>
          <p>Type: { mission ? mission.type : 'Unknown' }</p>
          <p>{ mission ? mission.description : 'Unknown' }</p>
          <a href={ launchInfo.slug }>Space Launch Now Info</a>
        </div>
        <div className="rocket-provider">
          <h3>Rocket: { rocket.configuration.name }</h3>
          <p>Thrust: { rocket.configuration.to_thrust }kN</p>
          <p>Height:  { rocket.configuration.length }M Width: { rocket.configuration.diameter }M</p>
          <a href={ rocket.configuration.wiki_url }>Rocket Wiki</a>
          <h3>Launch Provider: { rocket.configuration.launch_service_provider.name } </h3>
          <p>{ rocket.configuration.launch_service_provider.description }</p>
          <a href={ rocket.configuration.launch_service_provider.info_url }>Provider Website</a>
        </div>
        <button onClick={ () => 
          hideInfo(false) }>
            x
        </button>
      </article>
    )
}

const mapStateToProps = state => ({
  launchInfo: state.selectedLaunch
})

const mapDispatchToProps = dispatch => ({
  hideInfo: (bool) => dispatch(toggleLaunchInfo(bool))
})

NextLaunchInfo.propTypes = {
  launchInfo: PropTypes.object,
  hideInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchInfo);
