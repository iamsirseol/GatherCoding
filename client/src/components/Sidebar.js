import React from 'react'
import { Link } from "react-router-dom";
import { userInfo } from './dummy';// * DB들어오면 지우기
import { useSelector, useDispatch } from 'react-redux';
import { isShowLoginModalHandler } from '../redux/actions/actions'
import '../css/sidebar.css'
function Sidebar() {
    // * 로긴모달에 필요한 부분
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const showLoginModalHandler = () => { dispatch(isShowLoginModalHandler(true))};
    // *
    return (
        <div className = 'sidebar'>
                    <Link to = '/'><button>홈화면</button></Link>
                    {/* //! 리팩토링 필요성있다.. */}
                    {isLogin?
                    <Link to = '/myroom'><button>내 모임</button></Link>:
                    <span><button onClick = {showLoginModalHandler}>내 모임</button></span>
                    }
                    {/* //! */}
                    <span><button onClick = {()=>window.open(userInfo[0].blog,'_blank')}>TIL 작성하기</button></span>
        </div>
    )
}

export default Sidebar
