import React, { useState } from 'react'
import moment from 'moment';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {

  const [ show, showInfo ] = useState(false);
  const { name, location, news_url } = event;
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
          <h3>DETAILSSSSSSSSSSSSS</h3>
          <p>Event Type: <span>{ event.type.name }</span> </p>
          <p>When: <span>{ date }</span></p>
          <p>Where: <span>{ location }</span></p>
          <a href={ news_url }>News Link</a>
      </div>)
      }
    </article> 
  )
}

EventCard.propTypes = {
  event: PropTypes.object
}

export default EventCard;

