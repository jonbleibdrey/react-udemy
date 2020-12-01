import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

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

      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
    classes.push('red');
    }
    if (this.state.persons.length<=1){
      classes.push('bold')
    }

      return(
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p className={classes.join(' ')}>this is really working</p>
        <button className="button" onClick={this.togglePersonHandler}>toggle name</button>
        {persons}
      </div> 
      
    );
  }
}

export default App;
