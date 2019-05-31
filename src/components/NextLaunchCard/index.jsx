import React from 'react'

const NextLaunchCard = ({ launch }) => {
  const { name, pad, status, mission } = launch;
  return (
    <article className='next-launch-card'>
      <h3>{ name }</h3>
      <p>Orbit: { mission ? mission.orbit : 'Uknown' }</p>
      <p>Status: { status.name }</p>
      <p>Location: { pad.location.name }</p>
    </article>
  )
}

export default NextLaunchCard
