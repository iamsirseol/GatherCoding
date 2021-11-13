//라이브러리
import React from 'react';
import axios from 'axios';

import '../css/homeLogined.css';
import { groups, userInfo } from '../components/dummy';

function HomeLogined() {
    return (
        <div className = 'homeLogined-page'>
            
            {/* <Header /> */}
            <div className = 'homeLogined-body'>
                
                {/* <Sidebar /> */}
                <div className = 'homeLogined-room-list'>
                    {/* 유저의 위치로 바꿔야할듯 */}
                    <div className = 'homeLogined-room-location'>
                        {userInfo.username}님이 참가하고 계신 모각코 모임입니다.
                    </div>
                    {/* <div className = 'homeLogined-room-box'> */}
                        {userInfo.joinGroup
                            .map((group,idx) => {
                            return (
                                <button className = 'homeLogined-room' key = {idx}>
                                    <div>방 이름 : {group.title}</div>
                                    <div>인원 : {group.currentPopulation}/{group.population}</div>
                                    <div>코딩 장소 : {group.gather_location}</div>
                                    <div>리더 : {group.leader}</div>
                                </button>
                            )
                        })}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )

    // .homeLogined-room-list .homeLogined-room-location {
    //     padding : 30px ;
    //     font-size: larger;
    //     text-align: center;
    //     background-color: aqua;
    //     position :absolute;
    //     width : 100%;
    //     height : 100px;
    //     left:0;
    //     top : 50px;
    // }
    // .homeLogined-room-list .homeLogined-room-location .homeLogined-roombox {
    //     background-color: chocolate;
    // }
}

export default HomeLogined


/* background-color: chartreuse;
    font-size: larger;
    text-align: center; */