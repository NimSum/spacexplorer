import React from 'react'
import { connect } from 'react-redux';
import defaultRocketImage from '../../images/default-rocket-img.svg';
import PropTypes from 'prop-types';
import AstronautCard from '../../components/AstronautCard';

export const CategoryItemInfo = ({ item, category, isLoading, hasErrored }) => {
  console.log(item)

  const rocketInfo = () => {
    const { full_name, launch_service_provider, leo_capacity, 
    gto_capacity, length, diameter, info_url,
    wiki_url, image_url, description } = item;
    return (
      <section className="rocket-info">
        <div className="image-side">
          <img src={ image_url || defaultRocketImage } alt="rocket"/>
          <h2>{ isLoading ? 'Loading...' : full_name }</h2>
        </div>
        <div className="details-side">
          <p className="bio">{ description }</p>   
        </div>
      </section>)
  }



  const infoToRender = () => {
    switch (category) {
      case 'rockets':
        return rocketInfo();
      case 'space_stations':
        return (<div>lestations</div>)
      case 'orbiters':
        return (<div>leobiters</div>)
      case 'astronauts':
        return < AstronautCard 
          astronaut={ item } 
          detailed={ true } />;
      default:
        return (<div>launchhhhss</div>)
    }
  }
  
  return (
    <article className="category-info-container">
      { item.id && infoToRender() }
    </article>
  )
}
export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

CategoryItemInfo.propTypes = {
  item: PropTypes.object, 
  category: PropTypes.string, 
  isLoading: PropTypes.bool, 
  hasErrored: PropTypes.string
}

export default connect(mapStateToProps)(CategoryItemInfo);