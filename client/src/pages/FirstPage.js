import React from 'react'
import HomeLogined from './HomeLogined';
import Home from './Home';
import LoginModal from '../components/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler } from '../redux/actions/actions';
import { isShowLoginModalHandler } from '../redux/actions/actions';
import RoomListPage from './RoomListPage';
import Loading from '../components/Loading';
import CreateRoom from '../components/CreateRoom';
import MapPick from '../components/MapPick';
import MapContainer from '../components/MapContainer';


function FirstPage() {
    //* 헤더 사용시 주석까지 복붙
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const isLoading = useSelector(state => state.isLoadingReducer.isLoading)
    //*
    return (
        <div>
            
            <Home />
            {/* {isLogin ? <HomeLogined /> : <RoomListPage />} */}
            {/* {isLoading ? <Loading /> : <RoomListPage />} */}
            {/* <Loading /> */}
            {<MapPick />}
            
        </div>
    )
}

export default FirstPage
