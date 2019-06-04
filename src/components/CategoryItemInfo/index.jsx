import React from 'react'
import defaultAstronautImg from '../../images/default-astronaut.svg';
import defaultRocketImage from '../../images/default-rocket-img.svg';

export const CategoryItemInfo = ({ item, category, showInfo }) => {

  const astronautInfo = () => {
    const { name, bio, flights, landings, profile_image, type, wiki, agency } = item;
    return (
      <section className="astronaut-info">
        <div className="image-side">
          <img src={ profile_image || defaultAstronautImg } alt="astronaut"/>
          <h2>{ name }</h2>
        </div>
        <div className="details-side">
          <p className="bio">{ bio }</p>   
        </div>
      </section>)
  }

  const rocketInfo = () => {
    const { full_name, launch_service_provider, leo_capacity, 
    gto_capacity, length, diameter, info_url,
    wiki_url, image_url, description } = item;
    return (
      <section className="rocket-info">
        <div className="image-side">
          <img src={ image_url || defaultRocketImage } alt="astronaut"/>
          <h2>{ full_name }</h2>
        </div>
        <div className="details-side">
          <p className="bio">{ description }</p>   
        </div>
      </section>)
  }



  let renderThis;
  switch (category) {
    case 'rockets':
      renderThis = rocketInfo();
    break;
    case 'space_stations':
      renderThis = (<div>lestations</div>)
    break;
    case 'orbiters':
      renderThis = (<div>leobiters</div>)
    break;
    case 'astronauts':
      renderThis = astronautInfo();
    break;
    default:
      renderThis = (<div>launchhhhss</div>)
    break;
  }
  
  return (
    <article className="category-info-container">
      { renderThis }
      {/* <button onClick={() => showInfo({}, false)}>
        x
      </button> */}
    </article>
  )
}

export default CategoryItemInfo;