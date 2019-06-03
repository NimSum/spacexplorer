import React, { useState } from 'react'
import moment from 'moment';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {

  const [ show, showInfo ] = useState(false);
  const { name, location, news_url, description, video_url, feature_image } = event;
  const date = moment(event.date).format('MMM DD LT');
  
  return (
    <article className='event-card'
      onMouseEnter={() => showInfo(true)}
      onMouseLeave={() => showInfo(false)}>
      <div 
        className='news-details'>
        <h3>{ name }</h3>
        <p>Event Type: <span>{ event.type.name }</span> </p>
        <p>When: <span>{ date }</span></p>
        <p>Where: <span>{ location }</span></p>
      </div>
      {
        show && (
        <div className='news-detailed'
          onMouseEnter={() => showInfo(true)}
          onMouseLeave={() => showInfo(false)}>
          <p>{ description }</p>
          <img src={ feature_image } alt="Fetaured Event"/>
          <a href={ news_url }>News Link</a>
          <a href={ video_url }>Video Link</a>
      </div>)
      }
    </article> 
  )
}

EventCard.propTypes = {
  event: PropTypes.object
}

export default EventCard;

