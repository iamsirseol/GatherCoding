import React from 'react'


import '../css/room.css';
function Room({onClick, group, idx}) {
    
    return (
    <>
            <button onClick = {onClick} className = 'roomListPage-room' key = {idx}>
                <div>방 이름 : {group.title}</div>
                <div>인원 : {group.currentPopulation}/{group.population}</div>
                <div>코딩 장소 : {group.gather_location}</div>
                <div>리더 : {group.leader}</div>
            </button>  
    </>      
    )
}

export default Room
