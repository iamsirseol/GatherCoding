import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowRoomInfoChangeModalHandler } from '../redux/actions/actions';

import '../css/roomInfoChangeModal.css'

function RoomInfoChangeModal() {
    const dispatch = useDispatch()

    // const [loginId, setLoginId] = useState('');
    // const [loginPw, setLoginPw] = useState('')
    const [roomTitle, setRoomTitle] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [description, setDescription] = useState('');
    const [population, setPopulation] = useState('');

    const closeRoomInfoChangeModalHandler = () => { dispatch(isShowRoomInfoChangeModalHandler(false)) };

    // for onChange input value room title
    function changeRoomTitleValue(e) {
        e.preventDefault();
        setRoomTitle(e.target.value);
    }

    // for onChange input value meeting time
    function changeMeetingTimeValue(e) {
        e.preventDefault();
        setMeetingTime(e.target.value);
    }

    // for onChange input value description
    function changeDescriptionValue(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    // for onChange input value population
    function changePopulationValue(e) {
        e.preventDefault();
        setPopulation(e.target.value);
    }

    function roomInfoChangeRequest(e) { // 로그인 요청 함수
        e.preventDefault();

        const body = {
            // key는 내가 임의로 만든거에여, 백엔드 분들이랑 맞추자
            meetingTime,
            description,
            population,
            headrs: {
                'contente-type': 'application/json'
            }
        }

        axios.post(`https://localhost:4000/signin`, body)
            .then(res => {
                if (res.status === 200) { // 잘받아오면
                    // dispatch()
                    // const accessToken = 받아온값
                    // accssToken을 요청해서 받아온 값을 dispatch 해서 정보로 담아둬야 댐 그리고 로그인 핸들러를 이용해서 로그인상태로 돌려 둠 그리고 로그인 모달 창도 끔
                }
            }).catch(err => {
                if (err) {
                    // 어...로그인 실패했다고 떠야될듯
                }
            })

    }

    return (
        <div className="room-info-change-modal">
            <div className='room-info-change-modal-background' onClick={closeRoomInfoChangeModalHandler}></div>
            <div className="room-info-change-modal-container">
                <button className="room-info-change_close_btn" onClick={closeRoomInfoChangeModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>모임방 정보 변경</h2>
                <div className="room-info-change-modal-form">
                    {/* <form onSubmit={roomInfoChangeRequest}>
                        <input className="login-id" type="text" placeholder="ID" value={loginId} onChange={(e) => changeIdValue(e)} />
                        <input className="login-password" type="password" placeholder="PW" value={loginPw} onChange={(e) => changePwValue(e)} />
                        <button type="submit" className="login-btn">로그인하기</button>
                    </form> */}
                    <div className="description-container">
                        <input className="room-title" type="text" placeholder="room title" value={roomTitle} onChange={(e) => changeRoomTitleValue(e)} />
                        <input className="meeting-time" type="text" placeholder="meeting time" value={meetingTime} onChange={(e) => changeMeetingTimeValue(e)} />
                        <input className="description" type="text" placeholder="description" value={description} onChange={(e) => changeDescriptionValue(e)} />
                        <input className="population" type="text" placeholder="population" value={population} onChange={(e) => changePopulationValue(e)} />
                        {/* <input className="meeting-place" type="text" placeholder="meeting place" value={meetingPlace} onChange={(e) => changeMeetingPlaceValue(e)} /> */}
                        {/* <input className="leader-name" type="text" placeholder="leader name" value={leaderName} onChange={(e) => changeLeaderNameValue(e)} /> */}
                    </div>
                    <button className="info-change_btn" onClick={roomInfoChangeRequest}>변경하기</button>
                </div>
            </div>
        </div>
    )
}

export default RoomInfoChangeModal
