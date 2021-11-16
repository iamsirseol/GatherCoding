import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowRoomOutModalHandler } from '../redux/actions/actions';

import '../css/roomOutModal.css'

function RoomOutModal() {
    const dispatch = useDispatch()

    // const [loginId, setLoginId] = useState('');
    // const [loginPw, setLoginPw] = useState('')

    const closeRoomOutModalHandler = () => { dispatch(isShowRoomOutModalHandler(false)) };

    function roomOutRequest(e) { // 방 나가기 요청 함수
        e.preventDefault();

        const body = {

            // email: loginId,
            // password: loginPw,
            id: 'dummyId',
            title: 'dummyTitle',
            headrs: {
                'contente-type': 'application/json'
            }
        }
        // API가 조금 수정되어야 할 듯. 
        // delete 메소드 -> put 메소드
        // delete-room -> room-exit
        // response 적절하게 추가
        axios.delete(`https://localhost:4000/rooms/delete-room`, body)
            .then(res => {
                if (res.status === 200) { // 잘받아오면
                    // dispatch()
                    // ???
                }
            }).catch(err => {
                if (err) {
                    // 실패했다고 떠야 될 듯. alert 같은 것으로?
                }
            })
    }

    return (
        <div className="room-out-modal">
            <div className='room-out-modal-background' onClick={closeRoomOutModalHandler}></div>
            <div className="room-out-modal-container">
                <button className="room-out_close_btn" onClick={closeRoomOutModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>모임방을 나가시겠습니까?</h2>
                <div className="room-out-modal-form">
                    <div>
                        <button className="yes-btn" onClick={roomOutRequest}>예</button>
                    </div>
                    <div>
                        <button className="no-btn" onClick={closeRoomOutModalHandler}>아니요</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomOutModal
