import React from 'react'
import defaultAstronautImg from '../../images/default-astronaut.svg';

export const CategoryItemInfo = ({ item, category, showInfo }) => {

  const astronautInfo = () => {
    const { name, bio, flights, landings, profile_image, type, wiki, agency } = item;
    return (
      <section className="astronaut-info">
        <div className="image-side">
          <img src={ profile_image || defaultAstronautImg } alt=""/>
          <h2>{ name }</h2>
        </div>
        <div className="details-side">
          <p className="bio">{ bio }</p>   
        </div>
      </section>)
  }

  let renderThis;
  switch (category) {
    case 'rockets':
      renderThis = (<div>lerocket</div>)
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