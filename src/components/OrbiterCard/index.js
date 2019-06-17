import React from 'react';

const OrbiterCard = ({ orbiter, showInfo, detailed }) => {
  const { 
    name
  } = orbiter;

  const detailedInfo = (
    <section className="launch-provider-info">
      <div className="image-side">
        {/* <img src={ image_url || defaultRocketImage } alt="rocket"/> */}
        <h2>{ name }</h2>
      </div>
      <div className="details-side">
        {/* <p className='description'>{ description || 'No Description Provided...' }</p>
        <p>Launch Service Provider: <span>{ launch_service_provider && launch_service_provider.name }</span></p>
        <a href={ info_url || wiki_url }>Rocket Info Link</a>
        <a href={ wiki_url }>Wiki Link</a> */}
      </div>
    </section>
  )

  
  const normalDetails = (
    <article className='launch-provider-card'>
      <div className='image-side'>
        <h3>{ name }</h3>
        {/* <img src={ image_url || defaultRocketImage } alt="Rocket"/> */}
      </div>
      <div className='details-side'>
        <button onClick={() => showInfo(orbiter)}>
          Details
        </button>
      </div>
    </article>
  )

  return detailed ? detailedInfo : normalDetails;
}

export default OrbiterCard