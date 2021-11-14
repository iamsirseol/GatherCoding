import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {isShowSignUpModalHandler } from '../redux/actions/actions';
import ImageUpload from './ImageUpload'

import '../css/signUpModal.css'

function SignUpModal() {
    const [signUpId, setSignUpId] = useState(''); //
    const [signUpPw, setSignUpPw] = useState(''); //
    const [checkPw, setCheckPw] = useState(''); 
    const [signUpNickname, setSignUpNickname] = useState(''); //
    const [signUpUrl, setsignUpUrl] = useState(''); 
    const [signUpImage, setSignUpImage] = useState('');

    const dispatch = useDispatch()
    const closeSignUpModalHandler = () => { dispatch(isShowSignUpModalHandler(false))};

    // for onChange input value id create로 이름 바꾸자. 일단 pr 먼저
    function changeIdValue (e) {
      e.preventDefault();
      setSignUpId(e.target.value);
    }
    // for onChange input value pw
    function changePwValue (e) {
      e.preventDefault();
      setSignUpPw(e.target.value);
    }
    function checkPwValue (e) {
        e.preventDefault();
        setCheckPw(e.target.value);
    }
    function changeNicknameValue (e) {
        e.preventDefault();
        setSignUpNickname(e.target.value);
    }
    function changeUrlValue (e) {
        e.preventDefault();
        setsignUpUrl(e.target.value);
    }

    function signUpRequest(e){ // 회원가입 요청 함수
        e.preventDefault();
        const formData = new FormData();
        formData.append('sign-up-email', signUpId)
        formData.append('sign-up-email', signUpPw)
        formData.append('sign-up-email', signUpNickname)
        formData.append('sign-up-email', signUpUrl)
        formData.append('image', signUpImage);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
            withCredentials: true
        }

        axios.post(`https://localhost:4000/signUp`, formData, config)
            .then(res => {
                if(res.status === 201){ // 잘받아오면
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
        <div className="-modal">
            <div className='sign-up-modal-background' onClick={closeSignUpModalHandler}></div>
            <div className="sign-up-modal-container">
                <button className="sign-up_close_btn" onClick={closeSignUpModalHandler}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
                <h2>Sign Up</h2>
                <div className="sign-up-modal-form">
                    <form onSubmit={signUpRequest}>
                        <input className="sign-up-id" type="text" placeholder="email 입력" value={signUpId} onChange={(e) => changeIdValue(e)} /><a>중복 확인</a>
                        <input className="sign-up-password" type="password" placeholder="비밀번호" value={signUpPw} onChange={(e) => changePwValue(e)} />
                        {/* 대문자 Capslock, 유효성 검사가 뜨는 디스패치...? */}
                        <input className="check-password" type="password" placeholder="비밀번호 확인" value={checkPw}onChange={(e) => checkPwValue(e)} />
                        <input className="sign-up-nickname" type="text" placeholder="닉네임" value={signUpNickname} onChange={(e) => changeNicknameValue(e)} />
                        <input className="sign-up-url" type="text" placeholder="깃허브 주소" value={signUpUrl} onChange={(e) => changeUrlValue(e)} />
                        <p>프로필 이미지</p><ImageUpload />
                        <button type="submit" className="sign-up-btn">회원가입하기</button>
                    </form>
                    <div className="social-sign-up">
                        <button>깃허브로 가입하기</button>
                        {/* <button><img src="img/icon_social_login(kakao).png" />카카오로 가입하기</button> */}
                    </div>
                    {/* 컴포넌트로 할까 */}
                </div>
            </div>
        </div>
    )
}

export default SignUpModal
