import React from 'react'
import { groups , userInfo } from '../components/dummy'
import RoomList from '../components/RoomList';
import '../css/roomListPage.css'



import { useSelector, useDispatch } from 'react-redux';


import Home from './Home';

function RoomListPage() {
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)//로긴상태

    
    
    return (
        {isLogin} ? 
        (
        <div className = 'roomListPage-page'>
            <div className = 'roomListPage-body'>
                <div className = 'roomListPage-main'>
                    <form className='roomListPage-room-location'>
                        {/* {userInfo.user_address} */}
                            <div className='roomListPage-room-location-locbox'>
                                <select className = 'roomListPage-loc'><option>{userInfo.user_address.split(' ')[0]}</option></select>
                                <select className = 'roomListPage-loc'><option>{userInfo.user_address.split(' ')[1]}</option></select>
                            </div>
                            <button className = 'roomListPage-current-location btn'>현재위치</button>
                    </form>
                    <div className='roomListPage-create-meeting'>
                        <button className='roomListPage-create-meeting btn'>모각코 만들기</button>
                    </div>    
                    <div className = 'roomListPage-room-list'>
                        <RoomList />
                    </div>                            
                </div>
                
            </div>
        </div>
        ) 
        : <Home /> 
)}

export default RoomListPage
