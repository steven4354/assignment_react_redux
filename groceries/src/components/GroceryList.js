import React, { Component } from "react";
import PropTypes from "prop-types";
import AddItemContainer from "../containers/AddItemContainer";

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
    this.filterItems = this.filterItems.bind(this);
  }

  showForm(e) {
    e.preventDefault();
    this.setState({ showingForm: true });
  }

  filterItems(e) {
    e.preventDefault();
    switch (e.target.value) {
      case "Show all":
        this.props.showAll(this.props.items);
        console.log(this.props);
        break;
      case "Show available":
        this.props.showAvailable(this.props.items);
        break;
      case "Show not available":
        this.props.showNotAvailable(this.props.items);
        break;
      default:
        this.props.showNotAvailable(this.props.items);
        break;
    }
  }

  render() {
    return (
      <div className="GroceryList container">
        <select
          className="form-control"
          name="filter"
          onChange={this.filterItems}
        >
          <option value="Show all">Show All</option>
          <option value="Show available">Show Available</option>
          <option value="Show not available">Show Not Available</option>
        </select>
        {this.props.items.map(obj => {
          return <GroceryCard item={obj} key={obj.id} />;
        })}
        <button className={`btn btn-danger btn-lg`} onClick={this.showForm}>
          Add new grocery item
        </button>
        {this.state.showingForm ? (
          <div>
            <AddItemContainer showForm={this.showForm} />
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
  itemFilters: PropTypes.array.isRequired
};

export default GroceryList;
