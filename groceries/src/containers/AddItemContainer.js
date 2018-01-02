import React, {Component} from "react";

// Import serialize to get the serialized form data
import serialize from "form-serialize";

//*redux store connection stuff
// Import the connect function from React-Redux
import {connect} from "react-redux";

//Import the createPuppy action creator
import {createItem} from "../actions";
// Import the presentational component
import AddItem from "../components/AddItem";

class AddItemContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <AddItem onSubmit={this.props.onSubmit} showForm={this.props.showForm} />
    );
  }
}
// Map dispatch to props to create a submit function that
// dispatches creating a puppy
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();

      const form = e.target;
      const data = serialize(form, {hash: true});

      dispatch(createItem(data));
      form.reset();
    }
  };
};

//*redux store connection stuff
// Generate the AddPuppyContainer which renders AddPuppy
// with all the new props. We don't need to map state to
// props so we just send `null` in its place.

export default connect(null, mapDispatchToProps)(AddItemContainer);
