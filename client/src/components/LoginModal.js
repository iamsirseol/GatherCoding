import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowLoginModalHandler, isCurrentId, isLoginAlertHandler } from '../redux/actions/actions';
import LoginAlert from './LoginAlert'
// import CheckSignMsg from './CheckSignMsg'

import '../css/loginModal.css'

// import Oauth from './Oauth';

function LoginModal() {
    const dispatch = useDispatch()

    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [oauthClicked, setOauthClicked] = useState(false);

    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const isSuccess = useSelector(state => state.isLoginAlertReducer.isLoginAlert)
    const curLoginId = useSelector(state => state.isCurrentIdReducer.isCurrentIdHandler)

    const closeLoginModalHandler = () => { dispatch(isShowLoginModalHandler(false)) };
    const loginHandler = (val) => { dispatch(isLoginHandler(val)) }
    const curLoginedId = (val) => { dispatch(isCurrentId(val)) }
    const faliedLogin = () => { dispatch(isLoginAlertHandler(true)) }

    // for onChange input value id
    function changeIdValue(e) {
        e.preventDefault();
        setLoginId(e.target.value);
    }

    // for onChange input value pw
    function changePwValue(e) {
        e.preventDefault();
        setLoginPw(e.target.value);
    }

    useEffect(() => {
        console.log(curLoginId)
        console.log(isLogin)
    }, [isLogin, curLoginId])

    async function loginRequest(e) { // 로그인 요청 함수
        e.preventDefault();
        const body = { email: loginId, password: loginPw, }
        const conf = {
            headrs: {
                'contente-type': 'application/json'
            },
            withCredentials: true
        }
        return axios.post(`http://localhost:4000/users/signin`, body, conf)
            .then(res => {
                curLoginedId(loginId)
                window.sessionStorage.setItem('email', loginId);
                console.log(res.data.data.accessToken)
            }).then(res => {
                loginHandler(true)
            }).then(res => {
                closeLoginModalHandler()
            }).catch(err => {
                faliedLogin()
            })
    }

    // function oauthRequest(e) {
    //     e.preventDefault();

    //     setOauthClicked(true);
    // }
    function oauthRequest(e) { // 로그인 요청 함수
        e.preventDefault();

        // const body = {
        //     email: oauthId,
        //     password: oauthPw,
        //     headers: {
        //         'contente-type': 'application/json'
        //     }
        // }
        // console.log(process.env.GITHUB_CLIENT_ID);
        const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=0b8485d8bd3f0461eae1`;
        window.location.assign(GITHUB_LOGIN_URL);
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
                    <form onSubmit={(e) => loginRequest(e)}>
                        <input className="login-id" type="text" placeholder="ID" value={loginId} onChange={(e) => changeIdValue(e)} />
                        <input className="login-password" type="password" placeholder="PW" value={loginPw} onChange={(e) => changePwValue(e)} />
                        <button type="submit" className="login-btn" disabled={
                            loginId && loginPw ? false : true}>로그인하기</button>
                    </form>
                    <div className="social-login">
                        <button onClick={oauthRequest}>깃허브로 가입하기</button>
                        {/* <button><img src="img/icon_social_login(kakao).png" />카카오로 가입하기</button> */}
                    </div>
                    {/* 컴포넌트로 할까 */}
                </div>
            </div>
            {isSuccess ? <LoginAlert /> : null}
        </div>
    )
}

export default LoginModal
