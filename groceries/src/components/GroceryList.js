import React, {PropTypes} from 'react'

const GroceryList = (props) => {
  // Using Bootstrap 4 card layout  
  return (
    <div className="GroceryList container">
      To Be Made
    </div>
  )
}

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  itemFilters: PropTypes.string.isRequired,
}

export default GroceryList
