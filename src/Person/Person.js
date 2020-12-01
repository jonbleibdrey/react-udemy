import React from 'react'
import styled from 'styled-components'


const StyledDiv =styled.div`
width: 60%;
margin:16px auto;
border: 1px solid #ccc;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
    width: 450px;
}
`

const Person = (props) => {
    // const style ={
    //     '@media(min-width: 500px)': {
    //         width:'450px'
    //     }
    // }
    
    return (
        // <div className="Person" >
        <StyledDiv>
           <p onClick={props.click}>im a {props.name}! i am {props.age} years old</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <h1>click above to delete</h1>
        </StyledDiv>
    )
}

export default Person
