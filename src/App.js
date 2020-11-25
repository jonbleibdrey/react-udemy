import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      {
      name: "jonathan", 
      age: 28,
    },
    {
      name: "jackson", 
      age: 26,

    },
    {
      name: "max", 
      age: 65,

    }

    ]
  }

  switchNameHandler = () => {
    // console.log("was clicked")
    //  dont do this this.state.persons[0].name = "maxamillian"
    this.setState( {
      persons: [
        {
        name: "BIG jonathan", 
        age: 28,
      },
      {
        name: "Big jackson", 
        age: 26,
  
      },
      {
        name: " big max", 
        age: 65,
  
      }
  
      ]

      
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>this is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
