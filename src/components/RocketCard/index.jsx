import React from 'react'
import PropTypes from 'prop-types';
import defaultRocketImage from '../../images/default-rocket-img.svg';

const RocketCard = ({ rocket, showInfo, detailed}) => {
  const { 
    full_name,
    launch_service_provider,
    leo_capacity,
    gto_capacity,
    length,
    diameter,
    info_url,
    wiki_url,
    image_url,
    description 
  } = rocket;

  const detailedInfo = (
    <section className="rocket-info">
      <div className="image-side">
        <img src={ image_url || defaultRocketImage } alt="rocket"/>
        <h2>{ full_name }</h2>
      </div>
      <div className="details-side">
        <p>{ description || 'No Description Provided...' }</p>
        <p>Launch Service Provider: { launch_service_provider.name }</p>
        <a href={ info_url }>Rocket Info Link</a>
        <a href={ wiki_url }>Wiki Link</a>
      </div>
    </section>
  )

  
  const normalDetails = (
    <article className='rocket-card'>
      <div className='image-side'>
        <h3>{ full_name }</h3>
        <img src={ image_url || defaultRocketImage } alt="Rocket"/>
      </div>
      <div className='details-side'>
        <p>Length: <span>{ length }</span></p>
        <p>Diameter: <span>{ diameter }</span></p>
        <p>To LEO: <span>{ leo_capacity ? leo_capacity : 'Unknown' } kg</span></p>
        <p>To GTO: <span>{ gto_capacity ? gto_capacity : 'Unknown' } kg</span></p>
        <button onClick={() => showInfo(rocket)}>
          Details
        </button>
      </div>
    </article>
  )

  return detailed ? detailedInfo : normalDetails;
}

RocketCard.propTypes = {
  rocket: PropTypes.object,
  showInfo: PropTypes.func
}

export default RocketCard;
