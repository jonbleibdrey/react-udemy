import React from 'react'
import "./Person.css"

const Person = (props) => {
    return (
        <div className="Person">
            <h1>click to delete</h1>
           <p onClick={props.click}>im a {props.name}! i am {props.age} years old</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person
