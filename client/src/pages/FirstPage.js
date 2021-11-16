import React from 'react'

import Home from './Home';
import LoginModal from '../components/LoginModal';
import { useSelector, useDispatch } from 'react-redux';


import RoomListPage from './RoomListPage';
import Loading from '../components/Loading';
import CreateRoom from '../components/CreateRoom';
import MapPick from '../components/MapPick';
import MapContainer from '../components/MapContainer';
import LandingPage from '../components/LandingPage';
import Map from '../components/kakao/map/Map';


function FirstPage() {
    //* 헤더 사용시 주석까지 복붙
    const isLoading = useSelector(state => state.isLoadingReducer.isLoading)
    //*
    return (
        <>
            
            <Home />
            
            {isLoading ? <Loading /> : <RoomListPage />}
            {/* <Loading /> */}
            {/* <div className = 'landing'>{<Map />}</div> */}
            
        </>
    )
}

export default FirstPage
