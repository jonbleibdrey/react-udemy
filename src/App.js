import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>this is really working</p>
        <Person />
      </div>
    );
  }
}

export default App;
