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
        formData.append('email', signUpId)
        formData.append('password', signUpPw)
        formData.append('username', signUpNickname)
        formData.append('blog', signUpUrl)
        formData.append('image', signUpImage);
        // for (let el of formData.entries()) {
        //     console.log(el);
        // }
        // const config = 
        axios.post(`http://localhost:4000/users/signup`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
            withCredentials : true
        })
            .then((res) => {
                // if(res.status === 201){ 잘받아오면
                //     const { username, email, password, image, blog, current_location } = request;
                // }
                console.log(res.data)
            }).catch(err => {
                
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
                        <input className="sign-up-id" type="text" placeholder="email 입력" name="email" value={signUpId} onChange={(e) => changeIdValue(e)} />
                        <input className="sign-up-password" type="password" name="password" placeholder="비밀번호" value={signUpPw} onChange={(e) => changePwValue(e)} />
                        {/* 대문자 Capslock, 유효성 검사가 뜨는 디스패치...? */}
                        <input className="check-password" type="password" placeholder="비밀번호 확인" value={checkPw}onChange={(e) => checkPwValue(e)} />
                        <input className="sign-up-nickname" type="text" name="username" placeholder="닉네임" value={signUpNickname} onChange={(e) => changeNicknameValue(e)} />
                        <input className="sign-up-url" type="text" name="blog" placeholder="깃허브 주소" value={signUpUrl} onChange={(e) => changeUrlValue(e)} />
                        <ImageUpload signUpImage={signUpImage} setSignUpImage ={setSignUpImage}/>
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
