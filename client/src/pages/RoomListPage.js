
import React,{ useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import dotenv from "dotenv";
import axios from 'axios';

import { Link } from 'react-router-dom';
import { groups , userInfo } from '../components/dummy'

import '../css/roomListPage.css'








import Home from './Home';
import { changeCity, changeRegion, isShowLoginModalHandler } from '../redux/actions/actions';
import Room from '../components/Room';



dotenv.config();
function RoomListPage() {
    
    const dispatch = useDispatch();
    const showLoginModalHandler = () => { dispatch(isShowLoginModalHandler(true))};
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
  
    useEffect(()=>{
        // if(!region||!city){
            navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
        // }
    },[region,city])
    
    
    return (
        {isLogin} ? 
        (
        <div className = 'roomListPage-page'>
            <div className = 'roomListPage-body'>
                <div className = 'roomListPage-main'>
                    <div className='roomListPage-room-location'>
                        {/* {userInfo.user_address} */}
                          <div className='roomListPage-room-location-locbox'>
                            {region} {city} 에서 참여 가능한 모임방들
                          </div>
                    </div>
                    <div className='roomListPage-create-meeting'>
                        {isLogin? <button className='roomListPage-create-meeting btn'>모각코 만들기</button>
                        : <button className='roomListPage-create-meeting btn' onClick = {showLoginModalHandler} >모각코 만들기</button>}
                    </div>    
                    <div className = 'common-room-component-list'>
                        {/* <RoomList /> */}
                        {groups.filter(el=>el.location_address.split(' ')[1]===city)
                        .map((group,idx) => {
                            return (
                                <div className = 'common-room-box' key ={idx}>
                                    {isLogin ? <Link to = '/roominfo'><Room group = {group} idx = {idx}/></Link>
                                    : <Room onClick = {showLoginModalHandler} group = {group} idx = {idx}/>
                                    }
                                </div>    
                            )
                            })
                        }
                    </div>                            
                </div>
                
            </div>
        </div>
        ) 
        : <Home /> 
)}
        
export default RoomListPage;
