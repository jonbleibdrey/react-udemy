import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"
import UserInput from "./UserInput"
import UserOutput from "./UserOutput"


class App extends Component {

  state = {
    persons: [
      {
        id: "1",
      name: "jonathan", 
      age: 28,
    },
    {
      id: "2",
      name: "jackson", 
      age: 26,

    },
    {
      id: "3",
      name: "max", 
      age: 65,

    }

    ],
    otherState: [
      {
        userName: "jonathan"
      },
      {
        userName: "mark"
      }
    ],
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( { persons: persons})

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
    }
      return(
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>toggle name</button>
        {persons}
      </div>
    );
  }
}

export default App;
