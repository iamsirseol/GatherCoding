import React from 'react'
import RoomInfo from './RoomInfo';

function RoomPage({ match }) {
    const { id } = match.params;
    
    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasss<br/>
            <RoomInfo roomId={parseInt(id,10)}/>
        </div>
    )
}

export default RoomPage
