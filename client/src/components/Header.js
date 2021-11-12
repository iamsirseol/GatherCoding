import React from 'react'
import '../css/header.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isShowSignUpModalHandler } from '../redux/actions/actions'


function Header({isLogin, logoutHandler, showLoginModalHandler, isShowLoginModal}) {
    // console.log(logoutHandler)
    const dispatch = useDispatch()

    const ShowSignUpModal = useSelector(state => state.isShowSignUpModalReducer.isShowSignUpModal)

    const showSignUpHandler = () => { dispatch(isShowSignUpModalHandler(true)) };

    const toggleLoginButton = () => { // 로그인 일때랑 아닐때 불러오는 함수 변경
        if(isLogin){
            return logoutHandler()
        }else{
            return showLoginModalHandler()
        }
    }

    return (
        <header>
            <img className = 'page-logo' src = 'https://user-images.githubusercontent.com/75051059/141219381-c64490bf-907d-4929-8b1b-ad7891604a58.png'/>    
            <div className = 'header-right'>
                <button onClick = {showSignUpHandler}>{isLogin ? '개인정보' : '회원가입' }</button>
                <button onClick = {toggleLoginButton}>{isLogin ? '로그아웃' : '로그인' }</button>
            </div>        
        </header>
    )
}

export default Header
