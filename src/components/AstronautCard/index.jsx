import React from 'react'
import defaultAstronautImg  from '../../images/default-astronaut.svg';

const AstronautCard = ({ astronaut, showInfo }) => {
  const { name, status, nationality, profile_image_thumbnail, date_of_birth } = astronaut;
  return (
    <article className="astronaut-card">
      <div className="image-side">
        <img src={ profile_image_thumbnail || defaultAstronautImg } alt=""/>
        <button onClick={() => showInfo(astronaut, true)}>
          BIO
        </button>
      </div>
      <div className="details-side">
        <h3>{ name }</h3>
        <p>DOB: <span>{ date_of_birth }</span></p>
        <p>Status: <span>{ status.name }</span></p>
        <p>Nationality: <span>{ nationality }</span></p>
      </div>
    </article>
  )
}

export default AstronautCard;

