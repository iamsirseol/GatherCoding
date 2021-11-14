import React from 'react'
import { Link } from "react-router-dom";
import { userInfo } from './dummy';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../redux/actions/actions'
import '../css/sidebar.css'
function Sidebar() {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const showLoginModalHandler = () => { dispatch(isShowLoginModalHandler(true))};
    const logoutHandler = () => { dispatch(isLoginHandler(false)) };
    const showSignUpHandler = () => { dispatch(isShowSignUpModalHandler(true)) };
    return (
        <div className = 'sidebar'>
                    <Link to = '/'><button>홈화면</button></Link>
                    {/* //! 리팩토링 필요성있다.. */}
                    {isLogin?
                    <Link to = '/myroom'><button>내 모임</button></Link>:
                    <span><button onClick = {showLoginModalHandler}>내 모임</button></span>
                    }
                    {/* //! */}
                    <span><button onClick = {()=>window.open(userInfo.blog,'_blank')}>TIL 작성하기</button></span>
        </div>
    )
}

export default Sidebar
