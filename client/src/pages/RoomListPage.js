
import React,{ useEffect } from 'react'
import { groups , userInfo } from '../components/dummy'
import RoomList from '../components/RoomList';
import { useSelector, useDispatch } from 'react-redux';
import dotenv from "dotenv";
import axios from 'axios';
import '../css/roomListPage.css'

import React from 'react'
import { groups , userInfo } from '../components/dummy'
import RoomList from '../components/RoomList';
import '../css/roomListPage.css'



import { useSelector, useDispatch } from 'react-redux';



import Home from './Home';
import { changeCity, changeRegion } from '../redux/actions/actions';



dotenv.config();
function RoomListPage() {
    
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)//로긴상태
    const {region,city} = useSelector(state=>state.locationReducer)
    console.log(region,city)
    // const changeCityHandler = () => { dispatch(changeCity())}
    function onGeoOk(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`
        ,{headers:{Authorization:`KakaoAK ${process.env.REACT_APP_REST_API}`}}
        )
        .then(res=>{
            console.log(res.data.documents)
            dispatch(changeRegion(res.data.documents[0].address.region_1depth_name))
            dispatch(changeCity(res.data.documents[0].address.region_2depth_name)) 
        }
        ).catch(e=>console.log(e))
    }
    function onGeoError(){
        alert("위치권한을 확인해주세요");
    }
    // const loc = async (e) => {
    //     e.preventDefault()
    //     navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
    // };
    useEffect(()=>{
        // if(!region||!city){
            navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
        // }
    },[region,city])
    

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

                            <select className = 'roomListPage-loc'><option>{region}</option></select>
                            <select className = 'roomListPage-loc'><option>{city}</option></select>                        

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
