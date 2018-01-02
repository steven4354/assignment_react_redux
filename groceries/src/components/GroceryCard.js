import React from "react";
import PropTypes from "prop-types";

const GroceryCard = ({ item }) => {
  const { name, id, category, available, description } = item;

  // Using Bootstrap 4 card classes
  return (
    <div
      className="GroceryCard card"
      style={{
        maxWidth: "320px",
        backgroundColor: "gray",
        padding: "6px",
        marginBottom: "10px"
      }}
    >
      <div className="card-block">
        <h4>{name}</h4>
        <p> id: {id} </p>
        <p> category: {category}</p>
        <p> purchased: {available.toString()}</p>
        <p> description: {description}</p>
      </div>
    </div>
  );
};

/*
<AdoptButton available={available} onAdoptClick={onAdoptClick} />
*/

GroceryCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default GroceryCard;
