import React from 'react'

export const CategoryItemInfo = ({ item, category, showInfo }) => {
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
      renderThis = (<div>astrosss</div>)
    break;
    default:
      renderThis = (<div>launchhhhss</div>)
    break;
  }
  return (
    <article>
      <h2>Category</h2>
      { renderThis }
    </article>
  )
}

export default CategoryItemInfo;