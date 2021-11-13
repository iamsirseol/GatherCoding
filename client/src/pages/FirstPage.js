import React from 'react'
import HomeLogined from './HomeLogined';
import Home from './Home';
import LoginModal from '../components/LoginModal';
// * 사이드바, 헤더 사용시 주석까지 복붙하기 
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler } from '../redux/actions/actions';
import { isShowLoginModalHandler } from '../redux/actions/actions';
// *

function FirstPage() {
    //* 헤더 사용시 주석까지 복붙
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)
    const showLoginModalHandler = (e) => { dispatch(isShowLoginModalHandler(true))};
    const dispatch = useDispatch()
    const logoutHandler = () => { dispatch(isLoginHandler(false)) };
    //*
    return (
        <div>
            
            {isLogin ? <HomeLogined /> : <Home />}
            
            {isShowLoginModal ? <LoginModal /> : null}
            {console.log(isShowLoginModal)} 
        </div>
    )
}

export default FirstPage
