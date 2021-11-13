import React from 'react'
import { groups } from '../components/dummy'
import { useSelector} from 'react-redux';
// import '../css/homeLogined.css';
function Room() {
    const {city} = useSelector(state=>state.locationReducer)
    return (
    <>
    {groups.filter(el=>el.location_address.split(' ')[1] === city)
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
