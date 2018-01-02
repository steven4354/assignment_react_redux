import React, { Component } from "react";

//importing our custom components and containers
import GroceryListContainer from '../containers/GroceryListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GroceryListContainer />
      </div>
    );
  }
}

export default App;
