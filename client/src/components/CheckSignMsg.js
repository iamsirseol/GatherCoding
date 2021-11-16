import React from 'react'
import '../css/checkSignMsg.css'
function CheckSignMsg({message}) {

    return (
        <div className = 'check-sign-msg'>
            <p>{message}</p>
        </div>
    )
}

export default CheckSignMsg