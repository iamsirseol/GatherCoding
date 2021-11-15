import React from 'react';
import { useSelector } from 'react-redux';
import '../css/roominfo.css';
import { userInfo } from '../components/dummy'
import Map from '../components/Map';

import UserList from '../components/UserList';
import MapContainer from '../components/MapContainer';


function RoomInfo() {
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)

    return (
    <div>
        <div className = 'roominfo-page'>
            <div className = 'roominfo-map'>
                <MapContainer />
            </div>
            <div className='roominfo-info-div'>
                <div className = 'roominfo-meeting-time'>
                    약속 시간 : 매주 월,수,금 20~22시
                </div>
                <div className = 'roominfo-info-outer'>
                    <div className='roominfo-info-inner'>
                        <h1>청주 모각코 모임</h1>
                        <div>
                            코딩해야지 코딩해야지 반복하다 <br/>
                            결국 자버리는 분들 <br/><br/>
                            같이 코딩해요<br/><br/>
                            다같이 파이팅~~!
                        </div>
                    </div>
                    <div className='roominfo-info-person'>
                        인원수 : 2/8
                    </div>
                </div>
            </div>
            {/* 방장이면 */}
            <div className='roominfo-change-room-info'><button>모각코 방 정보 변경</button></div>
        </div>
        <div className='roominfo-user-list'>
            {/* {console.log(userInfo)} */}
            {userInfo.map((user,i)=>{
                const {image,username,blog} = user;
                console.log(image,username,blog);
                return (<div key = {i}>
                      <UserList image={image} username={username} blog={blog}/>
                    </div>
            )
            })}
            
        </div>    
    </div>
    )
}

export default RoomInfo
