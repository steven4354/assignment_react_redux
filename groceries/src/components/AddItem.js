import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import PropTypes from "prop-types";
const AddItem = ({ onSubmit, showForm }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Add An Item{" "}
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="name" labelText="Name">
      <Input name="name" />
    </InputGroup>
    <InputGroup name="category" labelText="Category">
      <Input name="category" />
    </InputGroup>
    <InputGroup name="description" labelText="Description">
      <Input name="description" />
    </InputGroup>
    <Button type="submit" color="primary">
      Add Item
    </Button>
  </form>
);

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddItem;
