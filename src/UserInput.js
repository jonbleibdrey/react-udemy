import React from 'react'

const UserInput = (props) => {
    return (
        <div className="Person">
            <label for="input"> user inpute : </label>
            <input type="text" onChange={props.changed} value={props.cname}/>
        </div>
    )
}

export default UserInput
