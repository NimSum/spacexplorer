import React from 'react'
import { connect } from 'react-redux';

const NextLaunchInfo  = ({ launchInfo }) => {
  console.log(launchInfo)
    return (
      <article>
        <h3>HIIIIIIIIIII</h3>
      </article>
    )
}

const mapStateToProps = state => ({
  launchInfo: state.selectedLaunch
})

export default connect(mapStateToProps)(NextLaunchInfo);

// {
//   "id": "41495097-341b-4ec5-b7e5-a450cf45fc23",
//   "url": "https://spacelaunchnow.me/api/3.3.1/launch/41495097-341b-4ec5-b7e5-a450cf45fc23/",
//   "launch_library_id": null,
//   "slug": "https://spacelaunchnow.me/launch/falcon-9-block-5-dragon-in-flight-abort-test-41495097-341b-4ec5-b7e5-a450cf45fc23",
//   "name": "Falcon 9 Block 5 | Dragon In-Flight Abort Test",
//   "img_url": null,
//   "status": {
//       "id": 2,
//       "name": "TBD"
//   },
//   "net": "2019-06-01T00:00:00Z",
//   "window_end": "2019-06-01T00:00:00Z",
//   "window_start": "2019-06-01T00:00:00Z",
//   "inhold": false,
//   "tbdtime": false,
//   "tbddate": false,
//   "probability": null,
//   "holdreason": "",
//   "failreason": "",
//   "hashtag": null,
//   "rocket": {
//       "id": 2409,
//       "configuration": {
//           "id": 164,
//           "launch_library_id": 188,
//           "url": "https://spacelaunchnow.me/api/3.3.1/config/launcher/164/",
//           "name": "Falcon 9 Block 5",
//           "launch_service_provider": "SpaceX"
//       },
//       "launcher_stage": [
//           {
//               "type": "Core",
//               "reused": null,
//               "launcher_flight_number": 4,
//               "launcher": {
//                   "id": 56,
//                   "url": "https://spacelaunchnow.me/api/3.3.1/launcher/56/",
//                   "details": "Falcon 9 booster B1048 is a reusable orbital-class Block 5 Falcon 9 first-stage booster manufactured by SpaceX. B1048 was the third Falcon 9 block 5 to fly and the second block 5 booster to re-fly. It became the second orbital-class booster to fly a third time.",
//                   "flight_proven": true,
//                   "serial_number": "B1048",
//                   "status": "active",
//                   "previous_flights": 3,
//                   "image_url": "https://daszojo4xmsc6.cloudfront.net/media/launcher_core_images/56_image_20190226081613.jpeg"
//               },
//               "landing": null
//           }
//       ],
//       "spacecraft_stage": {
//           "id": 418,
//           "url": "https://spacelaunchnow.me/api/3.3.1/spacecraft/flight/418/",
//           "destination": "Atlantic",
//           "mission_end": null,
//           "spacecraft": {
//               "id": 233,
//               "url": "https://spacelaunchnow.me/api/3.3.1/spacecraft/233/",
//               "name": "Crew Dragon 1",
//               "serial_number": "C202",
//               "status": {
//                   "id": 3,
//                   "name": "Destroyed"
//               },
//               "description": "Crew Dragon 1 is the Crew Dragon spacecraft launched on the SpaceX DM-1 demonstration mission to the ISS.\r\nIt was destroyed during an anomaly during testing in April 2019.",
//               "configuration": {
//                   "id": 6,
//                   "url": "https://spacelaunchnow.me/api/3.3.1/config/spacecraft/6/",
//                   "name": "Crew Dragon 2",
//                   "type": {
//                       "id": 1,
//                       "name": "Unknown"
//                   },
//                   "agency": {
//                       "id": 121,
//                       "url": "https://spacelaunchnow.me/api/3.3.1/agencies/121/",
//                       "name": "SpaceX",
//                       "type": "Commercial"
//                   },
//                   "in_use": true,
//                   "image_url": "https://daszojo4xmsc6.cloudfront.net/media/orbiter_images/crew2520dragon25202_image_20190207032511.jpeg"
//               }
//           }
//       }
//   },
//   "mission": {
//       "id": 983,
//       "launch_library_id": null,
//       "name": "Crew Dragon In-Flight Abort Test",
//       "description": "A Falcon 9 will launch carrying a Dragon capsule and will simulate a failure whilst flying through max-q to demonstrate the dragons ability to escape in the event of a catostrophic failure of the launch vehicle.\r\n\r\nThe booster has flown three times before.",
//       "type": "Test Flight",
//       "orbit": "Sub-Orbital",
//       "orbit_abbrev": "Sub Orbit"
//   },
//   "pad": {
//       "id": 87,
//       "agency_id": null,
//       "name": "Launch Complex 39A, Kennedy Space Center, FL",
//       "info_url": null,
//       "wiki_url": "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
//       "map_url": "http://maps.google.com/maps?q=28.608+N,+80.604+W",
//       "latitude": "28.60822681",
//       "longitude": "-80.60428186",
//       "location": {
//           "id": 27,
//           "name": "Kennedy Space Center, FL, USA",
//           "country_code": "USA"
//       }
//   }
// }