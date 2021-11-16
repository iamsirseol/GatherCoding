import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowLoginModalHandler } from '../redux/actions/actions';

import '../css/loginModal.css'

function LoginModal() {
    const dispatch = useDispatch()

    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('')

    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    // const loginHandler = dispatch(isLoginHandler(true));

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
        const body = {email: loginId, password: loginPw,}
        const conf = {
            headrs: {
                'contente-type': 'application/json'
            },
            withCredentials: true
        }
        axios.post(`http://localhost:4000/users/signin`, body, conf)
            .then(res => {
                // window.localStorage.setItem('email', res); 새로고침해도 저장용으로 찾은건데 아직 모름
                closeLoginModalHandler()
            }).then(res => {
                console.log('asdfasd')
                dispatch(isLoginHandler(true))
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
