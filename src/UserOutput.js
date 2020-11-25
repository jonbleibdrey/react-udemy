import React from 'react'

const UserOutput = (props) => {
        return (
            <div className="Person" onClick={props.click}>
                <p>helllo {props.user} hello</p>

                <p>what up ninja!@</p>
            </div>
        )
}

export default UserOutput
