import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>this is really working</p>
        <Person name="jonathan" age="30" />
        <Person name="jack" age="50">My Hobbies: Racing</Person>
        <Person name="nat" age="32" />
      </div>
    );
  }
}

export default App;
