import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"
import UserInput from "./UserInput"
import UserOutput from "./UserOutput"


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

    ],
    otherState: [
      {
        userName: "jonathan"
      },
      {
        userName: "mark"
      }
    ]
  }

  switchNameHandler = () => {
    
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

  changeIt = (event) =>{
    this.setState({
      otherState:[
        {
          userName: event.target.value
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {
        name: event.target.value, 
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
    
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

      return(
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={() => this.switchNameHandler("maxamillian")}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,"max!")} change={this.nameChangedHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <UserInput changed={this.changeIt}/>
        <UserOutput user={this.state.otherState[0].userName} cname={this.state.otherState[0].userName}/>
        <UserOutput user={this.state.otherState[0].userName} cname={this.state.otherState[0].userName} />
      </div>
    );
  }
}

export default App;
