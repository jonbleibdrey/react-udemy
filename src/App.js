import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const app = props => {

  const [personsState, setPersonsState] = useState({
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
  );

  const switchNameHandler = () => {
    // console.log("was clicked")
    //  dont do this personsState.persons[0].name = "maxamillian"
    setPersonsState( {
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

    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>this is really working</p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
  }


export default app;


// state = {
//   persons: [
//     {
//     name: "jonathan", 
//     age: 28,
//   },
//   {
//     name: "jackson", 
//     age: 26,

//   },
//   {
//     name: "max", 
//     age: 65,

//   }

//   ]
// }

// switchNameHandler = () => {
//   // console.log("was clicked")
//   //  dont do this personsState.persons[0].name = "maxamillian"
//   this.setState( {
//     persons: [
//       {
//       name: "BIG jonathan", 
//       age: 28,
//     },
//     {
//       name: "Big jackson", 
//       age: 26,

//     },
//     {
//       name: " big max", 
//       age: 65,

//     }

//     ]

    
//   })
// }