// Import the connect function from React-Redux
import { connect } from "react-redux";
// Import serialize to get the serialized form data
import serialize from "form-serialize";
//Import the createPuppy action creator
import { createItem } from "../actions";
// Import the presentational component
import AddItem from "../components/AddItem";

// Map dispatch to props to create a submit function that
// dispatches creating a puppy
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(createItem(data));
      form.reset();
    }
  };
};

// Generate the AddPuppyContainer which renders AddPuppy
// with all the new props. We don't need to map state to
// props so we just send `null` in its place.
const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;
