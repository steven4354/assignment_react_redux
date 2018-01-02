import React, {Component} from "react";

//importing our custom components and containers
import GroceryListContainer from "../containers/GroceryListContainer";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Grocery List</h1>
        <GroceryListContainer />
      </div>
    );
  }
}

export default App;
