import React from 'react'


import '../css/room.css';
function Room({onClick, group, idx}) {
    console.log(group)
    return (
    <>
            <button onClick = {onClick} className = 'roomListPage-room' key = {idx}>
                <div>방 이름 : {group.title}</div>
                <div>인원 : {group.currentPopulation}/{group.population}</div>
                <div>코딩 장소 : {group.meeting_place}</div>
                <div>약속시간 : {group.meeting_time}</div>
            </button>  
    </>      
    )
}

export default Room
