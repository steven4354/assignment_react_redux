import React, {Component} from "react";
import PropTypes from "prop-types";

//custom components
import GroceryCard from "./GroceryCard";

class GroceryList extends Component {
  // Using Bootstrap 4 card layout
  constructor(props) {
    //props: {items, itemFilters, createItem}
    super();
    this.state = {
      showingForm: false
    };

    // This binding is necessary to make `this` work in the callback
    this.showForm = this.showForm.bind(this);
  }

  showForm(e) {
    e.preventDefault;
    this.setState({showingForm: true});
  }

  render() {
    return (
      <div className="GroceryList container">
        {this.props.items.map(obj => {
          return <GroceryCard item={obj} key={obj.id} />;
        })}
        <button className={`btn btn-danger btn-lg`} onClick={this.showForm}>
          Add new grocery item
        </button>
        {this.state.showingForm ? (
          <div>
            <form />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  itemFilters: PropTypes.string.isRequired
};

export default GroceryList;
