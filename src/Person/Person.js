import React from 'react'
import "./Person.css"
import Radium from 'radium'

const Person = (props) => {
    const style ={
        '@media(min-width: 500px)': {
            width:'450px'
        }
    }
    return (
        <div className="Person" style={style}>
           <p onClick={props.click}>im a {props.name}! i am {props.age} years old</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <h1>click above to delete</h1>
        </div>
    )
}

export default Radium(Person)
