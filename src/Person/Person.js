import React from 'react'

const Person = (props) => {
    return (
        <div>
           <p>im a {props.name}! i am {props.age} years old</p> 
            <p>{props.children}</p>
        </div>
    )
}

export default Person
