import React, { useEffect } from 'react'
import '../css/header.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler, isCurrentId } from '../redux/actions/actions'


function Header() {
    // const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)
    // const showLoginModalHandler = (e) => { dispatch(isShowLoginModalHandler(true))};
    const dispatch = useDispatch()
    // const logoutHandler = () => { dispatch(isLoginHandler(false)) };
    
    // console.log(logoutHandler)
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const showLoginModalHandler = () => { dispatch(isShowLoginModalHandler(true))};
    const curLoginedId = (val) => {dispatch(isCurrentId(val))}
    const logoutHandler = () => { 
        dispatch(isLoginHandler(false)) 
        window.sessionStorage.removeItem('email')
        curLoginedId('')
    };
    const showSignUpHandler = () => { dispatch(isShowSignUpModalHandler(true)) };

    // const toggleLoginButton = () => { // 로그인 일때랑 아닐때 불러오는 함수 변경
    //     console.log(isLogin)
    //     if(isLogin){
    //         return logoutHandler()
    //     }else{
    //         return showLoginModalHandler()
    //     }
    // } // 다시 지워도 되는지 확인할것

    useEffect(() => {
        // showLoginModalHandler()
    },[isShowLoginModal])

    return (
        <header>
            <Link to = '/'><img className = 'page-logo' src = 'https://user-images.githubusercontent.com/75051059/141219381-c64490bf-907d-4929-8b1b-ad7891604a58.png'/></Link>    
            <div className = 'header-right'>
                {isLogin ? 
                <>  
                    <Link to = '/myinfo'><button>개인정보</button></Link>
                    <Link to = '/'><button onClick = {logoutHandler}>로그아웃</button></Link>
                </>
                :<>
                    <button onClick = {showSignUpHandler}>회원가입</button>
                    <button onClick={(e) => showLoginModalHandler(e)} className="check-button">로그인</button>
                </>
                }
            </div>        
        </header>
    )
}

export default Header
