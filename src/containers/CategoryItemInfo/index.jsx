import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AstronautCard from '../../components/AstronautCard';
import RocketCard from '../../components/RocketCard';

export const CategoryItemInfo = ({ item, category, isLoading, hasErrored }) => {

  const infoToRender = () => {
    switch (category) {
      case 'rockets':
        return < RocketCard 
          rocket={ item } 
          detailed={ true } />;
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