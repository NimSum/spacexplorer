import React from 'react'
import defaultAstronautImg  from '../../images/default-astronaut.svg';
import PropTypes from 'prop-types';
import moment from 'moment';

const AstronautCard = ({ astronaut, showInfo, detailed }) => {
  const { name, bio, flights, profile_image, wiki, status, nationality, profile_image_thumbnail, date_of_birth } = astronaut;

  const detailedInfo = 
    <section className="astronaut-info">
        <div className="image-side">
          <img src={ profile_image || defaultAstronautImg } alt="astronaut"/>
          <h2>{ name }</h2>
        </div>
        <div className='details-side'>
          <p className='bio'>{ bio }</p>
          <article>
            <h3>Missions:</h3>
            { flights
              ? flights.map(flight => (
                  <div key={ flight.id }>
                    <h3>{ flight.name }</h3>
                    <p>For: { flight.mission.type || 'Unknown' }</p>
                    <p>Orbit: { flight.orbit }</p>
                    <p>When: { moment(flight.net)
                               .format('MMM DD LT') }</p>
                    <p>Where: { flight.pad.location.name }</p>
                  </div>))
              : <h2>No Missions</h2>
            }
            <a href={ wiki }>Wiki Link</a>
          </article>
        </div>
      </section>

  const normalDetails = (<article className="astronaut-card">
      <div className="image-side">
        <img src={ profile_image_thumbnail || defaultAstronautImg } alt="Astronaut"/>
        <button onClick={() => showInfo(astronaut)}>
          BIO
        </button>
      </div>
      <div className="details-side">
        <h3>{ name }</h3>
        <p>DOB: <span>{ date_of_birth }</span></p>
        <p>Status: <span>{ status.name }</span></p>
        <p>Nationality: <span>{ nationality }</span></p>
      </div>
    </article>)

  return  detailed ? detailedInfo : normalDetails
}

AstronautCard.propTypes = {
  astronaut: PropTypes.object,
  showInfo: PropTypes.func,
  detailed: PropTypes.bool
}

export default AstronautCard;
