import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { isShowCreateRoomModalHandler } from '../redux/actions/actions';

import '../css/createRoom.css';
import MapPick from './MapPick';

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
                <div className="create-room-modal-form">
                    <form >
                        <input className="create-room-id" type="text" placeholder="방 제목 입력" value={roomTitle} onChange={(e) => changeRoomTitle(e)} />
                        <input className="create-room-password" type="text" placeholder="시간 입력" value={meetingTime} onChange={(e) => changeMeetingTime(e)} />
                        <input className="check-password" type="text" placeholder="인원(숫자만 입력하세요)" value={personNum}onChange={(e) => checkPersonNum(e)} />
                        <input className="create-room-nickname" type="text" placeholder="방 정보 입력" value={roomDesc} onChange={(e) => changeRoomDesc(e)} />
                        {/* 카카오지도 */}
                        <MapPick />
                        <button type="submit" className="create-room-btn">모각코 만들기</button>
                    </form>
                    <div className="social-create-room">
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateRoom
