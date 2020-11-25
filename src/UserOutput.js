import React from 'react'

const UserOutput = (props) => {
        return (
            <div className="Person">
                <label for="output">output: </label>
                <p>helllo {props.user} hello  {props.user}</p>
            </div>
        )
}

export default UserOutput
