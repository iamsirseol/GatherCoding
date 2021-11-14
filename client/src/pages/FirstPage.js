import React from 'react'
import HomeLogined from './HomeLogined';
import Home from './Home';
import LoginModal from '../components/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler } from '../redux/actions/actions';
import { isShowLoginModalHandler } from '../redux/actions/actions';
import RoomListPage from './RoomListPage';


function FirstPage() {
    //* 헤더 사용시 주석까지 복붙
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    //*
    return (
        <div>
            
            <Home />
            {isLogin ? <HomeLogined /> : <RoomListPage />}
            
        </div>
    )
}

export default FirstPage
