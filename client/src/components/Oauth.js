import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isLoginHandler, isShowLoginModalHandler } from '../redux/actions/actions';

import '../css/loginModal.css'

function Oauth() {
    const dispatch = useDispatch()

    const [oauthId, setOauthId] = useState('');
    const [oauthPw, setOauthPw] = useState('')

    // const closeLoginModalHandler = () => { dispatch(isShowLoginModalHandler(false))};

    // for onChange input value id
    function changeOauthIdValue (e) {
      e.preventDefault();
      setOauthId(e.target.value);
    }

    // for onChange input value pw
    function changeOauthPwValue (e) {
      e.preventDefault();
      setOauthPw(e.target.value);
    }


    function oauthRequest(e){ // 로그인 요청 함수
        e.preventDefault();

        const body = {
            // key는 내가 임의로 만든거에여, 백엔드 분들이랑 맞추자
            email: oauthId,
            password: oauthPw,
            headrs: {
                'contente-type': 'application/json'
            }
        }

        const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
        window.location.assign(this.GITHUB_LOGIN_URL);
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
        <div className="oauth">
            {/* <div className='oauth-background' onClick={closeLoginModalHandler}></div> */}
            <div className="oauth-background"></div>
            <div className="oauth-container">
                {/* <button className="login_close_btn" onClick={closeLoginModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button> */}
                <h2>Oauth</h2>
                <div className="oauth-form">
                    <form onSubmit={oauthRequest}>
                        <input className="oauth-id" type="text" placeholder="ID" value={oauthId} onChange={(e) => changeOauthIdValue(e)} />
                        <input className="oauth-password" type="password" placeholder="PW" value={oauthPw} onChange={(e) => changeOauthPwValue(e)} />
                        <button type="submit" className="login-btn">깃허브로 가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Oauth
