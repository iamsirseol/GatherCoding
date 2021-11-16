import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowRoomInModalHandler } from '../redux/actions/actions';

import '../css/roomInModal.css'

function RoomInModal() {
    const dispatch = useDispatch()

    // const [loginId, setLoginId] = useState('');
    // const [loginPw, setLoginPw] = useState('')

    const closeRoomInModalHandler = () => { dispatch(isShowRoomInModalHandler(false)) };

    function roomInRequest(e) { // 방 나가기 요청 함수
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
        <div className="room-in-modal">
            <div className='room-in-modal-background' onClick={closeRoomInModalHandler}></div>
            <div className="room-in-modal-container">
                <button className="room-in_close_btn" onClick={closeRoomInModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>참여하시겠습니까?</h2>
                <div className="room-in-modal-form">
                    <div>
                        <button className="yes-btn" onClick={roomInRequest}>참여하기</button>
                    </div>
                    <div>
                        <button className="no-btn" onClick={closeRoomInModalHandler}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInModal
