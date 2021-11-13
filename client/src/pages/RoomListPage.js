import React from 'react'
// * 사이드바, 헤더 사용시 복붙하기
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler } from '../redux/actions/actions';
import { isShowLoginModalHandler } from '../redux/actions/actions';
import RoomList from '../components/RoomList';
import UsersLocation from '../components/UsersLocation';
import Home from './Home';

// *
function RoomListPage() {
    //* 헤더 사용시 주석까지 복붙
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)
    const showLoginModalHandler = (e) => { dispatch(isShowLoginModalHandler(true))};
    const dispatch = useDispatch()
    const logoutHandler = () => { dispatch(isLoginHandler(false)) };
    //*
    return (
        <div>
            {/* //* 헤더, 사이드바 사용시 복붙 */}
            {/* <Header isLogin={isLogin} logoutHandler={logoutHandler} showLoginModalHandler={showLoginModalHandler} isShowLoginModal={isShowLoginModal}/> */}
            {/* <Sidebar />             */}
            {isLogin ? 
            <>
                <UsersLocation />
                <RoomList />
            </>    
             : <Home />
            }
            
        </div>
    )
}

export default RoomListPage
