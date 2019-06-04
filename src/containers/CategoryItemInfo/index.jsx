import React from 'react'
import { connect } from 'react-redux';
import defaultAstronautImg from '../../images/default-astronaut.svg';
import defaultRocketImage from '../../images/default-rocket-img.svg';
import PropTypes from 'prop-types';
import moment from 'moment';

export const CategoryItemInfo = ({ item, category, isLoading, hasErrored }) => {
  const readableDate = (date) => moment(date).format('MMM DD LT');

  const astronautInfo = () => {
    const { name, bio, flights, landings, profile_image, wiki, status, agency } = item;
    return (
      <section className="astronaut-info">
        <div className="image-side">
          <img src={ profile_image || defaultAstronautImg } alt="astronaut"/>
          <h2>{ isLoading ? 'Loading...' : name }</h2>
        </div>
        
        { !isLoading && (<div className='details-side'>
          <p className='bio'>{ bio }</p>
          <article>
            <h3>Missions:</h3>
            { flights
              ? flights.map(flight => (
                  <div>
                    <h3>{ flight.name }</h3>
                    <p>For: { flight.mission.type || 'Unknown' }</p>
                    <p>Orbit: { flight.orbit }</p>
                    <p>When: { readableDate(flight.net) }</p>
                    <p>Where: { flight.pad.location.name }</p>
                  </div>))
              : <h2>No Missions</h2>
            }
          </article>
        </div>)}
      </section>)
  }

  const rocketInfo = () => {
    const { full_name, launch_service_provider, leo_capacity, 
    gto_capacity, length, diameter, info_url,
    wiki_url, image_url, description } = item;
    return (
      <section className="rocket-info">
        <div className="image-side">
          <img src={ image_url || defaultRocketImage } alt="astronaut"/>
          <h2>{ isLoading ? 'Loading...' : full_name }</h2>
        </div>
        <div className="details-side">
          <p className="bio">{ description }</p>   
        </div>
      </section>)
  }



  let renderThis;
  switch (category) {
    case 'rockets':
      renderThis = rocketInfo();
    break;
    case 'space_stations':
      renderThis = (<div>lestations</div>)
    break;
    case 'orbiters':
      renderThis = (<div>leobiters</div>)
    break;
    case 'astronauts':
      renderThis = astronautInfo();
    break;
    default:
      renderThis = (<div>launchhhhss</div>)
    break;
  }
  
  return (
    <article className="category-info-container">
      { renderThis }
    </article>
  )
}
export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

CategoryItemInfo.propTypes = {
  item: PropTypes.object, 
  category: PropTypes.string, 
  isLoading: PropTypes.bool, 
  hasErrored: PropTypes.string
}

export default connect(mapStateToProps)(CategoryItemInfo);