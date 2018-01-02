import React, { PropTypes } from "react";

const GroceryCard = ({ item }) => {
  const { name, id, category, available, description } = item;

  // Using Bootstrap 4 card classes
  return (
    <div className="PuppyCard card" style={{ maxWidth: "320px" }}>
      <img
        className="card-img-top img-fluid"
        src={avatar ? avatar : "http://placehold.it/320x320"}
        alt="puppy avatar"
      />
      <div className="card-block">
        <h4>{name}</h4>
        <p>{breed}</p>
        <AdoptButton available={available} onAdoptClick={onAdoptClick} />
      </div>
    </div>
  );
};

PuppyCard.propTypes = {
  puppy: PropTypes.object.isRequired,
  onAdoptClick: PropTypes.func.isRequired
};

export default PuppyCard;
