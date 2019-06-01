import React from 'react'

const AstronautCard = ({ astronaut }) => {
  const { name } = astronaut;
  return (
    <article>
      <h3>{ name }</h3>
    </article>
  )
}

export default AstronautCard;

// {
//   "id": 596,
//   "url": "https://spacelaunchnow.me/api/3.3.1/astronaut/596/",
//   "name": "Bill Nelson",
//   "status": {
//       "id": 2,
//       "name": "Retired"
//   },
//   "type": {
//       "id": 4,
//       "name": "Non-Astronaut Passenger"
//   },
//   "agency": {
//       "id": 44,
//       "url": "https://spacelaunchnow.me/api/3.3.1/agencies/44/",
//       "name": "National Aeronautics and Space Administration",
//       "type": "Government"
//   },
//   "date_of_birth": "1942-09-29",
//   "date_of_death": null,
//   "nationality": "American",
//   "twitter": null,
//   "instagram": null,
//   "bio": "Clarence William Nelson II (born September 29, 1942) is an American politician serving as the senior United States Senator from Florida, first elected to that seat in 2000. A member of the Democratic Party, he previously served in the Florida House of Representatives from 1972 to 1978 and in the United States House of Representatives from 1979 to 1991. In January 1986, he became the second sitting member of Congress to fly in space when he served as a payload specialist on the Space Shuttle Columbia.",
//   "profile_image": "https://daszojo4xmsc6.cloudfront.net/media/astronaut_images/bill2520nelson_image_20190211162351.jpeg",
//   "profile_image_thumbnail": "https://daszojo4xmsc6.cloudfront.net/media/default/cache/15/18/151821a1575b1c84201de6e3e4f11d73.jpg",
//   "wiki": "https://en.wikipedia.org/wiki/Bill_Nelson",
//   "flights": [
//       {
//           "id": "bbb4c25a-152d-4402-beee-2f62969b98c1",
//           "url": "https://spacelaunchnow.me/api/3.3.1/launch/bbb4c25a-152d-4402-beee-2f62969b98c1/",
//           "launch_library_id": 188,
//           "slug": "https://spacelaunchnow.me/launch/space-shuttle-columbia-ov-102-sts-61-c-188",
//           "name": "Space Shuttle Columbia / OV-102 | STS-61-C",
//           "status": {
//               "id": 3,
//               "name": "Success"
//           },
//           "net": "1986-01-12T11:55:00Z",
//           "window_end": "1986-01-12T11:55:00Z",
//           "window_start": "1986-01-12T11:55:00Z",
//           "mission": {
//               "id": 682,
//               "launch_library_id": 920,
//               "name": "STS-61-C",
//               "type": "Communications"
//           },
//           "pad": {
//               "id": 87,
//               "name": "Launch Complex 39A, Kennedy Space Center, FL",
//               "location": {
//                   "id": 27,
//                   "name": "Kennedy Space Center, FL, USA"
//               }
//           },
//           "orbit": "LEO",
//           "rocket": {
//               "id": 314,
//               "configuration": {
//                   "id": 170,
//                   "url": "https://spacelaunchnow.me/api/3.3.1/config/launcher/170/",
//                   "name": "Space Shuttle Columbia OV-102",
//                   "full_name": "Space Shuttle Columbia OV-102",
//                   "launch_service_provider": {
//                       "id": 44,
//                       "url": "https://spacelaunchnow.me/api/3.3.1/agencies/44/",
//                       "name": "National Aeronautics and Space Administration",
//                       "type": "Government"
//                   },
//                   "image_url": "https://daszojo4xmsc6.cloudfront.net/media/launcher_images/space2520shuttle2520columbia2520ov-102_image_20190222030326.jpeg"
//               }
//           }
//       }
//   ],
//   "landings": [
//       {
//           "id": 67,
//           "url": "https://spacelaunchnow.me/api/3.3.1/spacecraft/flight/67/",
//           "destination": "Low Earth Orbit",
//           "mission_end": "1986-01-18T13:58:00Z",
//           "spacecraft": {
//               "id": 36,
//               "url": "https://spacelaunchnow.me/api/3.3.1/spacecraft/36/",
//               "name": "Space Shuttle Columbia",
//               "serial_number": "OV-102",
//               "status": {
//                   "id": 3,
//                   "name": "Destroyed"
//               },
//               "description": "Space Shuttle Columbia (Orbiter Vehicle Designation: OV-102) was the first space-rated orbiter in NASA's Space Shuttle fleet. It launched for the first time on mission STS-1 on April 12, 1981, the first flight of the Space Shuttle program. Over 22 years of service, it completed 27 missions before disintegrating during re-entry near the end of its 28th mission, STS-107 on February 1, 2003, resulting in the deaths of all seven crew members.",
//               "configuration": {
//                   "id": 14,
//                   "url": "https://spacelaunchnow.me/api/3.3.1/config/spacecraft/14/",
//                   "name": "Space Shuttle",
//                   "type": {
//                       "id": 1,
//                       "name": "Unknown"
//                   },
//                   "agency": {
//                       "id": 44,
//                       "url": "https://spacelaunchnow.me/api/3.3.1/agencies/44/",
//                       "name": "National Aeronautics and Space Administration",
//                       "type": "Government"
//                   },
//                   "in_use": false,
//                   "image_url": "https://daszojo4xmsc6.cloudfront.net/media/orbiter_images/space2520shuttle_image_20190207032524.jpeg"
//               }
//           },
//           "launch": {
//               "id": "bbb4c25a-152d-4402-beee-2f62969b98c1",
//               "url": "https://spacelaunchnow.me/api/3.3.1/launch/bbb4c25a-152d-4402-beee-2f62969b98c1/",
//               "launch_library_id": 188,
//               "slug": "https://spacelaunchnow.me/launch/space-shuttle-columbia-ov-102-sts-61-c-188",
//               "name": "Space Shuttle Columbia / OV-102 | STS-61-C",
//               "status": {
//                   "id": 3,
//                   "name": "Success"
//               },
//               "net": "1986-01-12T11:55:00Z",
//               "window_end": "1986-01-12T11:55:00Z",
//               "window_start": "1986-01-12T11:55:00Z",
//               "mission": "STS-61-C",
//               "mission_type": "Communications",
//               "pad": "Launch Complex 39A, Kennedy Space Center, FL",
//               "location": "Kennedy Space Center, FL, USA",
//               "landing": null,
//               "landing_success": null,
//               "launcher": null,
//               "orbit": "LEO",
//               "image": "https://daszojo4xmsc6.cloudfront.net/media/launcher_images/space2520shuttle2520columbia2520ov-102_image_20190222030326.jpeg"
//           }
//       }
//   ]
// }