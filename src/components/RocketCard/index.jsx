import React from 'react'
import PropTypes from 'prop-types';
import defaultRocketImage from '../../images/default-rocket-img.svg';

const RocketCard = ({ rocket, showInfo }) => {
  const { full_name, leo_capacity, 
    gto_capacity, length, diameter, image_url } = rocket;

  return (
    <article className='rocket-card'>
      <div className='image-side'>
        <h3>{ full_name }</h3>
        <img src={ image_url || defaultRocketImage } alt="Rocket"/>
      </div>
      <div className='details-side'>
        <p>Length: <span>{ length }</span></p>
        <p>Diameter: <span>{ diameter }</span></p>
        <p>To LEO: <span>{ leo_capacity ? leo_capacity : 'Unknown' } kg</span></p>
        <p>To GTO: <span>{ leo_capacity ? leo_capacity : 'Unknown' } kg</span></p>
        <button onClick={() => showInfo(rocket, true)}>
          Details
        </button>
      </div>
    </article>
  )
}

RocketCard.propTypes = {
  rocket: PropTypes.object,
  showInfo: PropTypes.func
}

export default RocketCard;
