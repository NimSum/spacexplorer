import React from 'react'
import moment from 'moment';

const EventCard = ({ event }) => {
  const { name, location, news_url } = event;
  const date = moment(event.date).format('MMM DD LT');
  return (
    <article className='event-card'>
      <h3>{ name }</h3>
      <p>Event Type: <span>{ event.type.name }</span> </p>
      <p>When: <span>{ date }</span></p>
      <p>Where: <span>{ location }</span></p>
      <a href={ news_url }>News Link</a>
    </article>
  )
}

export default EventCard;

