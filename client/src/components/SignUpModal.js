import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowLoginModalHandler } from '../redux/actions/actions';

import '../css/signUpModal.css'

function LoginModal() {
    const dispatch = useDispatch()

    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('')

    const closeLoginModalHandler = () => { dispatch(isShowLoginModalHandler(false))};

    // for onChange input value id
    function changeIdValue (e) {
      e.preventDefault();
      setLoginId(e.target.value);
    }

    // for onChange input value pw
    function changePwValue (e) {
      e.preventDefault();
      setLoginPw(e.target.value);
    }


    function loginRequest(e){ // 로그인 요청 함수
        e.preventDefault();

        const body = {
            // key는 내가 임의로 만든거에여, 백엔드 분들이랑 맞추자
            email: loginId,
            password: loginPw,
            headrs: {
                'contente-type': 'application/json'
            }
        }

        axios.post(`https://localhost:4000/signin`, body)
            .then(res => {
                if(res.status === 200){ // 잘받아오면
                    // dispatch()
                    // const accessToken = 받아온값
                    // accssToken을 요청해서 받아온 값을 dispatch 해서 정보로 담아둬야 댐 그리고 로그인 핸들러를 이용해서 로그인상태로 돌려 둠 그리고 로그인 모달 창도 끔
                }
            }).catch(err => {
                if(err){
                    // 어...로그인 실패했다고 떠야될듯
                }
            })
        
    }
    
    return (
        <div className="login-modal">
            <div className='login-modal-background' onClick={closeLoginModalHandler}></div>
            <div className="login-modal-container">
                <button className="login_close_btn" onClick={closeLoginModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>Login</h2>
                <div className="login-modal-form">
                    <form onSubmit={loginRequest}>
                        <input className="login-id" type="text" placeholder="ID" value={loginId} onChange={(e) => changeIdValue(e)} />
                        <input className="login-password" type="password" placeholder="PW" value={loginPw} onChange={(e) => changePwValue(e)} />
                        <button type="submit" className="login-btn">로그인하기</button>
                    </form>
                    <div className="social-login">
                        <button>깃허브로 가입하기</button>
                        {/* <button><img src="img/icon_social_login(kakao).png" />카카오로 가입하기</button> */}
                    </div>
                    {/* 컴포넌트로 할까 */}
                </div>
            </div>
        </div>
    )
}

export default LoginModal
