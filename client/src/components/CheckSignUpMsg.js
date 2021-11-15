import React from 'react'
import '../css/checkSignUpMsg.css'
function CheckSignUpMsg({message}) {

    return (
        <div className = 'check-sign-msg'>
            <p>{message}</p>
        </div>
    )
}

export default CheckSignUpMsg