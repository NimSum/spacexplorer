import React from 'react'
import PropTypes from 'prop-types';

const RocketCard = ({ rocket, showInfo }) => {
  const { name } = rocket;
  return (
    <article>
      <h3>{ name }</h3>
      <button onClick={() => showInfo(rocket, true)}>
        more
      </button>
    </article>
  )
}

RocketCard.propTypes = {
  rocket: PropTypes.object,
  showInfo: PropTypes.func
}

export default RocketCard;

// {
//   "id": 28,
//   "launch_library_id": 55,
//   "url": "https://spacelaunchnow.me/api/3.3.1/config/launcher/28/",
//   "name": "Atlas V 421",
//   "description": "Atlas V is an expendable launch system in the Atlas rocket family. It was formerly operated by Lockheed Martin and is now operated by United Launch Alliance (ULA), a joint venture with Boeing. Each Atlas V rocket uses a Russian-built RD-180 engine burning kerosene and liquid oxygen to power its first stage and an American-built RL10 engine burning liquid hydrogen and liquid oxygen to power its Centaur upper stage. The RD-180 engines are provided by RD Amross, while Aerojet Rocketdyne provides both the RL10 engines and the strap-on boosters used in some configurations. The 421 version uses a 4m wide fairing, 2 solid rocket boosters and one engine on the Centaur stage.",
//   "family": "Atlas",
//   "full_name": "Atlas V 421",
//   "launch_service_provider": {
//       "id": 124,
//       "url": "https://spacelaunchnow.me/api/3.3.1/agencies/124/",
//       "name": "United Launch Alliance",
//       "featured": true,
//       "type": "Commercial",
//       "country_code": "USA",
//       "abbrev": "ULA",
//       "description": "United Launch Alliance (ULA) is a joint venture of Lockheed Martin Space Systems and Boeing Defense, Space & Security. ULA was formed in December 2006 by combining the teams at these companies which provide spacecraft launch services to the government of the United States. ULA launches from both coasts of the US. They launch their Atlas V vehicle from LC-41 in Cape Canaveral and LC-3E at Vandeberg. Their Delta IV launches from LC-37 at Cape Canaveral and LC-6 at Vandenberg.",
//       "administrator": "CEO: Tory Bruno",
//       "founding_year": "2006",
//       "launchers": "Atlas | Delta IV | Vulcan",
//       "spacecraft": "CST-100 Starliner",
//       "launch_library_url": "https://launchlibrary.net/1.4/agency/124",
//       "successful_launches": 139,
//       "failed_launches": 2,
//       "pending_launches": 21,
//       "info_url": "http://www.ulalaunch.com/",
//       "wiki_url": "http://en.wikipedia.org/wiki/United_Launch_Alliance",
//       "logo_url": "https://daszojo4xmsc6.cloudfront.net/media/logo/united2520launch2520alliance_logo_20190223000119.png",
//       "image_url": "https://daszojo4xmsc6.cloudfront.net/media/agency_images/united2520launch2520alliance_image_20190223000119.jpeg",
//       "nation_url": "https://daszojo4xmsc6.cloudfront.net/media/agency_nation/united2520launch2520alliance_nation_20190223000119.jpeg"
//   },
//   "variant": "421",
//   "alias": "",
//   "min_stage": 0,
//   "max_stage": 2,
//   "length": 58.3,
//   "diameter": 3.8,
//   "maiden_flight": "2007-10-11",
//   "launch_mass": 433,
//   "leo_capacity": 14067,
//   "gto_capacity": 6890,
//   "to_thrust": null,
//   "apogee": 40000,
//   "vehicle_range": null,
//   "image_url": "https://daszojo4xmsc6.cloudfront.net/media/launcher_images/atlas2520v2520421_image_20190510174748.jpg",
//   "info_url": "https://www.ulalaunch.com/rockets/atlas-v",
//   "wiki_url": "https://en.wikipedia.org/wiki/Atlas_V"
// }