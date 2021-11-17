import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { isShowSignUpModalHandler, isShowIsSignUpModalHandler } from '../redux/actions/actions';
import ImageUpload from './ImageUpload'
import IsSignUp from './IsSignUp'
import CheckSignMsg from './CheckSignMsg'
import Loading from './Loading';
import '../css/signUpModal.css'
import { setAccessToken } from '../redux/actions/actions';
import { withCookies, Cookies, useCookies } from 'react-cookie';


function SignUpModal() {
    const [loading, setLoading] = useState(null);

    const [signUpId, setSignUpId] = useState(''); //
    const [signUpPw, setSignUpPw] = useState(''); //
    const [checkPw, setCheckPw] = useState('');
    const [signUpNickname, setSignUpNickname] = useState(''); //
    const [signUpUrl, setsignUpUrl] = useState('');
    const [signUpImage, setSignUpImage] = useState('');

    const [getMember, setGetMember] = useState(false);

    const [validEmail, setValidEmail] = useState(false);
    const [validPw, setValidPw] = useState(false);
    const [samePw, setSamePw] = useState(false);

    const dispatch = useDispatch()
    const closeSignUpModalHandler = () => { dispatch(isShowSignUpModalHandler(false)) };
    const isShowIsSignUpModal = useSelector(state => state.isShowIsSignUpModalReducer.isShowIsSignUpModal);
    console.log(isShowIsSignUpModal)
    const openIsSignUpModalHandler = (fnc) => { 
        dispatch(isShowIsSignUpModalHandler(true)) 
    }



    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    // console.log(cookies)
    // console.log('JWT : ', cookies.jwt)
    // console.log('액세스토큰 : ', cookies.jwt)

    useEffect(() => {

    }, [getMember])

    function conditionEmail(signUpId) {
        let regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (!regExp.test(signUpId)) {
            return false;
        }
        return true;
    }

    function conditionPassword(signUpPw) { // 숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이 통과
        let reg = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
        if (!reg.test(signUpPw)) {
            return false;
        }
        return true
    }

    useEffect(() => {
        if (!conditionEmail(signUpId)) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
        }
        if (signUpPw !== checkPw) {
            setSamePw(false)
        } else {
            setSamePw(true)
        }
        if (!conditionPassword(signUpPw)) {
            setValidPw(false)
        } else {
            setValidPw(true)
        }
        return () => setLoading(false);
    }, [validEmail, validPw, samePw])

    // function chcekSignUpCondition(){

    // }

    // for onChange input value id create로 이름 바꾸자. 일단 pr 먼저
    function changeIdValue(e) {
        e.preventDefault();
        setSignUpId(e.target.value);
        if (!conditionEmail(e.target.value)) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
        }
    }
    // for onChange input value pw
    function changePwValue(e) {
        e.preventDefault();
        setSignUpPw(e.target.value);
        if (!conditionPassword(e.target.value)) {
            setValidPw(false)
        } else {
            setValidPw(true)
        }
    }
    function checkPwValue(e) {
        e.preventDefault();
        setCheckPw(e.target.value);
        if (signUpPw !== e.target.value) {
            setSamePw(false)
        } else {
            setSamePw(true)
        }
    }
    function changeNicknameValue(e) {
        e.preventDefault();
        setSignUpNickname(e.target.value);
    }
    function changeUrlValue(e) {
        e.preventDefault();
        setsignUpUrl(e.target.value);
    }

    function signUpRequest(e) { // 회원가입 요청 함수
        
        console.log(validEmail && validPw && samePw)
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
        // axios.post(`http://localhost:4000/users/signup`, formData, {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        //     withCredentials : true
        // })
        axios.post(`http://localhost:4000/users/signup`, formData)
            .then((res) => {
                // console.log(cookies);
                dispatch(setAccessToken(cookies.accessToken));
            }).then(() => {
                setGetMember(true)
                // setTimeout(function(){
                //     openIsSignUpModalHandler()
                // }, 2000)
            }).then(() => {
                openIsSignUpModalHandler()
            })
            .catch(err => {
                setGetMember(false)
                // setTimeout(function(){
                //     openIsSignUpModalHandler()
                // }, 1000)
                openIsSignUpModalHandler()
            })
    }

    return (
        <div className="sign-up-modal">
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
                        {!validEmail ? <CheckSignMsg message={'이메일을 입력해주세요'} /> : null}
                        <input className="sign-up-password" type="password" name="password" placeholder="비밀번호" value={signUpPw} onChange={(e) => changePwValue(e)} />
                        {!validPw ? <CheckSignMsg message={'숫자, 영문, 특수문자 각 1자리 이상의 8~16 자리'} /> : null}
                        <input className="check-password" type="password" placeholder="비밀번호 확인" value={checkPw} onChange={(e) => checkPwValue(e)} />{!samePw ? <CheckSignMsg message={'비밀번호가 일치하지 않습니다.'} /> : null}
                        <input className="sign-up-nickname" type="text" name="username" placeholder="닉네임" value={signUpNickname} onChange={(e) => changeNicknameValue(e)} />
                        {!signUpNickname ? <CheckSignMsg message={'필수'} /> : null}
                        <input className="sign-up-url" type="text" name="blog" placeholder="깃허브 주소" value={signUpUrl} onChange={(e) => changeUrlValue(e)} />
                        <ImageUpload signUpImage={signUpImage} setSignUpImage={setSignUpImage} />
                        <button type="submit" className="sign-up-btn" disabled={
                            validEmail && validPw && samePw && signUpNickname ? false : true}>회원가입하기</button>
                    </form>
                    <div className="social-sign-up">
                        <button>깃허브로 가입하기</button>
                        {/* <button><img src="img/icon_social_login(kakao).png" />카카오로 가입하기</button> */}
                    </div>
                </div>
            </div>
            {isShowIsSignUpModal ? <IsSignUp getMember={getMember} alert={getMember ? '회원가입을 축하드립니다. 로그인을 해주세요' : '중복된 아이디 입니다.'} /> : null}
            {/* 21/11/16 이미지 필수 아니게 서버에서 바꿔주세요 라고 부탁하기 */}
        </div>
    )
}

export default SignUpModal
