import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { isShowLoginModalHandler } from '../redux/actions/actions'
import Room from './Room';
import { groups } from '../components/dummy'
// import '../css/roomList.css';
function RoomList({group, idx}) {
    const {city} = useSelector(state=>state.locationReducer)
    groups.filter(el=>el.location_address.split(' ')[1]===city)

         // * 로긴모달에 필요한 부분
         const dispatch = useDispatch()
         const isLogin = useSelector(state => state.isLoginReducer.isLogin)
         const showLoginModalHandler = () => { dispatch(isShowLoginModalHandler(true))};
         // *   

    return (
        <>
        {groups
        .filter(el=>el.location_address.split(' ')[1]===city)
        .map((group,idx) => {
            return (
                <div key ={idx}>
                {isLogin ? 
                <Link to = '/roominfo'><Room group = {group} idx = {idx}/></Link>
                :
                <Room onClick = {showLoginModalHandler}group = {group} idx = {idx}/>
        }
                </div>    
                    )
            })
        } 
        </>
        
            
    
        
    )
}

export default RoomList
