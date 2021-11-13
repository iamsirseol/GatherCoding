import React from 'react'
import { groups , userInfo } from '../components/dummy'
// import '../css/homeLogined.css';
function Room() {
    return (
    <>
    {groups.filter(el=>el.location_address === userInfo.user_address)
    .map((group,idx) => {
        return (
            <button className = 'roomListPage-room' key = {idx}>
                <div>방 이름 : {group.title}</div>
                <div>인원 : {group.currentPopulation}/{group.population}</div>
                <div>코딩 장소 : {group.gather_location}</div>
                <div>리더 : {group.leader}</div>
            </button>
            )
        })}
    </>      
    )
}

export default Room
