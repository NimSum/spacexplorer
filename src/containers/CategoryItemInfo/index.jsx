import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AstronautCard from '../../components/AstronautCard';
import RocketCard from '../../components/RocketCard';
import rocketLaunchGif from '../../images/rocket-launch.gif';

export const CategoryItemInfo = ({ item, category, isLoading, hasErrored }) => {

  const infoToRender = () => {
    switch (category) {
      case 'rockets':
        return < RocketCard 
          rocket={ item } 
          detailed={ true } />;
      case 'space_stations':
        return (<div>Space Stations.. In work</div>)
      case 'orbiters':
        return (<div>Orbiters... In work</div>)
      case 'astronauts':
        return < AstronautCard 
          astronaut={ item } 
          detailed={ true } />;
      default:
        return (<div>Nothing Here Yet</div>)
    }
  }
  
  return (
    <article className="category-info-container">
      { (item.id && !isLoading) && infoToRender() }
      { isLoading && <section className='category-loading'>
        { hasErrored.length
        ? <h2 className='errored'>{ hasErrored }</h2> 
        : (<article>
            <img src={ rocketLaunchGif } alt="loading gif"/>
            <h2>Loading {category.replace(/_/g, " ") } ...</h2>
          </article>) }
        </section> }
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