import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowOauthHandler } from '../redux/actions/actions';

import '../css/oauth.css'

function Oauth() {
    const dispatch = useDispatch()

    const [oauthId, setOauthId] = useState('');
    const [oauthPw, setOauthPw] = useState('')

    // const closeLoginModalHandler = () => { dispatch(isShowLoginModalHandler(false))};
    const closeOauthHandler = () => { dispatch(isShowOauthHandler(false)) };

    // for onChange input value oauthId
    function changeOauthIdValue (e) {
      e.preventDefault();
      setOauthId(e.target.value);
    }

    // for onChange input value oauthPw
    function changeOauthPwValue (e) {
      e.preventDefault();
      setOauthPw(e.target.value);
    }


    function oauthRequest(e){ // 로그인 요청 함수
        e.preventDefault();

        const body = {
            email: oauthId,
            password: oauthPw,
            headers: {
                'contente-type': 'application/json'
            }
        }
        // console.log(process.env.GITHUB_CLIENT_ID);
        const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=0b8485d8bd3f0461eae1&login=${oauthId}`;
        window.location.assign(GITHUB_LOGIN_URL);        
    }
    
    return (
        <div className="oauth">
            <div className='oauth-background' onClick={closeOauthHandler}></div>
            <div className="oauth-container">
                <button className="oauth_close_btn" onClick={closeOauthHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>Oauth</h2>
                <div className="oauth-form">
                    <form onSubmit={oauthRequest}>
                        <input className="oauth-id" type="text" placeholder="ID" value={oauthId} onChange={(e) => changeOauthIdValue(e)} />
                        <input className="oauth-password" type="password" placeholder="PW" value={oauthPw} onChange={(e) => changeOauthPwValue(e)} />
                        <button type="submit" className="oauth-btn">깃허브로 가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Oauth

