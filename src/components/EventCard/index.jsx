import React from 'react'

const EventCard = ({ event }) => {
  const { name, location, news_url, date } = event;
  console.log('hi')
  return (
    <article>
      <h3>{ name }</h3>
      <p>When: { date }</p>
      <p>Where: { location }</p>
      <a href={ news_url }>News</a>
    </article>
  )
}

export default EventCard;


const mockData = {
  "id": 18,
  "url": "https://spacelaunchnow.me/api/3.3.1/event/18/",
  "name": "SpaceX Cargo Dragon (CRS-17) Unberthing and Reentry",
  "type": {
      "id": 8,
      "name": "Undocking"
  },
  "description": "Filled with more than 4,200 pounds of valuable scientific experiments and other cargo, a SpaceX Dragon cargo spacecraft is set to return to Earth from the International Space Station Monday, June 3. NASA Television and the agency’s website will provide live coverage of the craft’s release beginning at 11:45 a.m. EDT.",
  "location": "International Space Station",
  "news_url": "https://www.nasa.gov/press-release/nasa-tv-set-to-air-us-cargo-ship-departure-from-space-station",
  "video_url": "https://www.youtube.com/watch?v=21X5lGlDOfg",
  "feature_image": "https://daszojo4xmsc6.cloudfront.net/media/event_images/spacex2520cargo2520dragon25202528crs-172529_image_20190530165550.jpeg",
  "date": "2019-06-03T15:45:00Z",
  "launches": [
      {
          "id": "de607493-4c2d-458e-9797-097732027ece",
          "url": "https://spacelaunchnow.me/api/3.3.1/launch/de607493-4c2d-458e-9797-097732027ece/",
          "launch_library_id": 1501,
          "slug": "https://spacelaunchnow.me/launch/falcon-9-block-5-spx-crs-17-1501",
          "name": "Falcon 9 Block 5 | SpX CRS-17",
          "status": {
              "id": 3,
              "name": "Success"
          },
          "net": "2019-05-04T06:48:58Z",
          "window_end": "2019-05-04T06:48:58Z",
          "window_start": "2019-05-04T06:48:58Z",
          "mission": "SpX CRS-17",
          "mission_type": "Resupply",
          "pad": "Space Launch Complex 40, Cape Canaveral, FL",
          "location": "Cape Canaveral, FL, USA",
          "landing": "OCISLY",
          "landing_success": 1,
          "launcher": "B1056",
          "orbit": "LEO",
          "image": "https://daszojo4xmsc6.cloudfront.net/media/launcher_images/falcon25209_image_20190224025007.jpeg"
      }
  ],
  "expeditions": [],
  "spacestations": [
      {
          "id": 4,
          "url": "https://spacelaunchnow.me/api/3.3.1/spacestation/4/",
          "name": "International Space Station",
          "status": {
              "id": 1,
              "name": "Active"
          },
          "founded": "1998-11-20",
          "description": "The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.",
          "orbit": "Low Earth Orbit",
          "image_url": "https://daszojo4xmsc6.cloudfront.net/media/spacestation_images/international2520space2520station_image_20190220215716.jpeg"
      }
  ]
}

