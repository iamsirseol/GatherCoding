import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { isShowCreateRoomModalHandler } from '../redux/actions/actions';

import '../css/createRoom.css';
import MapPick from './kakao/map/MapPick';
import SearchPlace from './SearchPlace';
import MapContainer from './MapContainer';
import LandingPage from './LandingPage';
import Map from './kakao/map/Map';


function CreateRoom() {
    const [roomTitle, setRoomTitle] = useState(''); //
    const [meetingTime, setMeetingTime] = useState(''); //
    const [personNum, setPersonNum] = useState(''); 
    const [roomDesc, setroomDesc] = useState(''); //
    
    const dispatch = useDispatch()
    const closeCreateRoomModalHandler = () => { dispatch(isShowCreateRoomModalHandler(false)) }

    //방제
    function changeRoomTitle (e) {
      e.preventDefault();
      setRoomTitle(e.target.value);
    }
    //약속시간
    function changeMeetingTime (e) {
      e.preventDefault();
      console.log(e.target.value)
      setMeetingTime(e.target.value);
    }
    //인원
    function checkPersonNum (e) {
        e.preventDefault();
        setPersonNum(e.target.value);
    }
    //방 정보
    function changeRoomDesc (e) {
        e.preventDefault();
        setroomDesc(e.target.value);
    }
    
     
    return (
        <div className="-modal">
            <div className='create-room-modal-background' onClick={closeCreateRoomModalHandler}></div>
            <div className="create-room-modal-container">
                <button className="create-room_close_btn" onClick={closeCreateRoomModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>모각코 만들기</h2>
                {/* //! form태그를 불가피하게 div로 바꾼건데 문제있으면 바로 말씀해주세요 */}
                <div className="create-room-modal-form">
                    <div className = 'form' >
                        <input className="create-room-id" type="text" placeholder="방 제목 입력" value={roomTitle} onChange={(e) => changeRoomTitle(e)} />
                        <input className="create-room-password" type="text" placeholder="ex)매주 월요일 오후3시" value={meetingTime} onChange={(e) => changeMeetingTime(e)} />
                        <input className="check-password" type="text" placeholder="인원(숫자만 입력하세요)" value={personNum}onChange={(e) => checkPersonNum(e)} />
                        <input className="create-room-nickname" type="text" placeholder="방 정보 입력" value={roomDesc} onChange={(e) => changeRoomDesc(e)} />
                        {/* 카카오지도 */}
                        <Map title={roomTitle} meetingTime={meetingTime} population = {personNum} description={roomDesc}/>
                        {/* <MapContainer /> */}
                        {/* <LandingPage /> */}
                        {/* <button className="create-room-btn">모각코 만들기</button> */}
                    </div>
                    <div className="social-create-room">            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateRoom
