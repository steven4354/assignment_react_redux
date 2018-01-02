import React from "react";

import PropTypes from "prop-types";

const GroceryList = ({ items, itemFilters }) => {
  // Using Bootstrap 4 card layout
  console.log(items);
  return <div className="GroceryList container">To Be Made</div>;
};

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  itemFilters: PropTypes.string.isRequired
};

export default GroceryList;
