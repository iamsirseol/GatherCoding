import React from 'react'
import '../css/homeComponent.css'
import Header from '../pages/Header'
import Sidebar from '../pages/Sidebar'
import { groups } from './dummy'
function HomeComponent() {
    return (
        <div className = 'page'>
            
            <Header />
            <div className = 'body'>
                
                <Sidebar />
                <div className = 'room-list'>
                    {/* 유저의 위치로 바꿔야할듯 */}
                    <div className = 'room-location'> {groups[0].location_address}에 있는 모각코 모임</div>
                    {groups
                        .filter(el=>el.location_address==='청주')
                        .map((group,idx) => {
                        return (
                            
                                <button className = 'room' key = {idx}>
                                <div>방 이름 : {group.title}</div>
                                <div>인원 : {group.currentPopulation}/{group.population}</div>
                                <div>코딩 장소 : {group.gather_location}</div>
                                <div>리더 : {group.leader}</div>
                                </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
