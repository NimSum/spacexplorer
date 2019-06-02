import React from 'react'
import { connect } from 'react-redux';
import { toggleLaunchInfo } from '../../actions'
import PropTypes from 'prop-types';

const NextLaunchInfo  = ({ launchInfo, hideInfo }) => {
  const { name, rocket, mission, pad } = launchInfo;
  console.log(rocket)
    return (
      <article 
        className='next-launch-info-card'
        onMouseLeave={ () => 
        hideInfo(false) }
      >
        <h2>{ name }</h2>
        <div className="mission">
          <h3>Mission Description:</h3>
          <p>Type: { mission ? mission.type : 'Unknown' }</p>
          <p>{ mission ? mission.description : 'Unknown' }</p>
          <a href={ launchInfo.slug }>Space Launch Now Info</a>
        </div>
        <div className="rocket-provider">
          <h3>Rocket: { rocket.configuration.name }</h3>
          <p>Thrust: { rocket.configuration.to_thrust }kN</p>
          <p>Height:  { rocket.configuration.length }M Width: { rocket.configuration.diameter }M</p>
          <a href={ rocket.configuration.wiki_url }>Rocket Wiki</a>
          <h3>Launch Provider: { rocket.configuration.launch_service_provider.name } </h3>
          <p>{ rocket.configuration.launch_service_provider.description }</p>
          <a href={ rocket.configuration.launch_service_provider.info_url }>Provider Website</a>
        </div>
        <button onClick={ () => 
          hideInfo(false) }>
            x
        </button>
      </article>
    )
}

const mapStateToProps = state => ({
  launchInfo: state.selectedLaunch
})

const mapDispatchToProps = dispatch => ({
  hideInfo: (bool) => dispatch(toggleLaunchInfo(bool))
})

NextLaunchInfo.propTypes = {
  launchInfo: PropTypes.object,
  hideInfo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchInfo);

// {
//   "id": "41077f29-434a-4e53-9360-ca754f37e052",
//   "url": "https://spacelaunchnow.me/api/3.3.1/launch/41077f29-434a-4e53-9360-ca754f37e052/",
//   "launch_library_id": 1927,
//   "slug": "https://spacelaunchnow.me/launch/long-march-11-jilin-1-1927",
//   "name": "Long March 11 | Jilin-1",
//   "img_url": null,
//   "status": {
//       "id": 2,
//       "name": "TBD"
//   },
//   "net": "2019-06-05T00:00:00Z",
//   "window_end": "2019-06-05T00:00:00Z",
//   "window_start": "2019-06-05T00:00:00Z",
//   "inhold": false,
//   "tbdtime": true,
//   "tbddate": true,
//   "probability": -1,
//   "holdreason": null,
//   "failreason": null,
//   "hashtag": null,
//   "rocket": {
//       "configuration": {
//           "id": 47,
//           "launch_library_id": 71,
//           "url": "https://spacelaunchnow.me/api/3.3.1/config/launcher/47/",
//           "name": "Long March 11",
//           "description": "",
//           "family": "Long March",
//           "full_name": "Long March 11",
//           "launch_service_provider": {
//               "id": 17,
//               "url": "https://spacelaunchnow.me/api/3.3.1/agencies/17/",
//               "name": "China National Space Administration",
//               "featured": true,
//               "type": "Government",
//               "country_code": "CHN",
//               "abbrev": "CNSA",
//               "description": "The China National Space Administration (CNSA) is the national space agency of the People's Republic of China. It is responsible for the national space program and for planning and development of space activities. CNSA and China Aerospace Corporation (CASC) assumed the authority over space development efforts previously held by the Ministry of Aerospace Industry. The CNSA has many launch sites around China with their orbital sites located in Jiuquan, Xichang, Taiyuan and Wenchang.",
//               "administrator": "Administrator: Tang Dengjie",
//               "founding_year": "1993",
//               "launchers": "Long March",
//               "spacecraft": "Shenzhou",
//               "launch_library_url": "https://launchlibrary.net/1.4/agency/17",
//               "successful_launches": 62,
//               "failed_launches": 1,
//               "pending_launches": 2,
//               "info_url": "http://www.cnsa.gov.cn/",
//               "wiki_url": "http://en.wikipedia.org/wiki/China_National_Space_Administration",
//               "logo_url": "https://daszojo4xmsc6.cloudfront.net/media/logo/china2520national2520space2520administration_logo_20190207032431.png",
//               "image_url": "https://daszojo4xmsc6.cloudfront.net/media/agency_images/china2520national2520space2520administration_image_20190207032431.jpeg",
//               "nation_url": "https://daszojo4xmsc6.cloudfront.net/media/agency_nation/china2520national2520space2520administration_nation_20190207032432.png"
//           },
//           "variant": "11",
//           "alias": "",
//           "min_stage": 1,
//           "max_stage": 4,
//           "length": 20,
//           "diameter": 2,
//           "maiden_flight": null,
//           "launch_mass": 58,
//           "leo_capacity": 500,
//           "gto_capacity": 0,
//           "to_thrust": 1177,
//           "apogee": 200,
//           "vehicle_range": 200,
//           "image_url": "https://daszojo4xmsc6.cloudfront.net/media/launcher_images/long2520march252011_image_20190222031217.jpeg",
//           "info_url": null,
//           "wiki_url": "https://en.wikipedia.org/wiki/Long_March_11"
//       },
//       "launcher_stage": [],
//       "spacecraft_stage": null
//   },
//   "mission": {
//       "id": 990,
//       "launch_library_id": 1200,
//       "name": "Jilin-1",
//       "description": "The first sea launch of Long March 11 rocket. It carries two Jilin-1 Earth observation satellites.",
//       "type": "Earth Science",
//       "orbit": null
//   },
//   "pad": {
//       "id": 101,
//       "agency_id": null,
//       "name": "Unknown Pad",
//       "info_url": null,
//       "wiki_url": "",
//       "map_url": "",
//       "latitude": "0",
//       "longitude": "0",
//       "location": {
//           "id": 3,
//           "name": "Sea Launch",
//           "country_code": "UNK"
//       }
//   },
//   "infoURLs": [],
//   "vidURLs": []
// }