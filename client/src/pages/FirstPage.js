import React from 'react'
import Header from '../components/Header';
import HomeLogined from './HomeLogined';
import Home from './Home';
import LoginModal from '../components/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler } from '../redux/actions/actions';
import Sidebar from '../components/Sidebar';
import { isShowLoginModalHandler } from '../redux/actions/actions';

function FirstPage() {
    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)

    const dispatch = useDispatch()
    const logoutHandler = () => { dispatch(isLoginHandler(false)) };
    const showLoginModalHandler = (e) => { dispatch(isShowLoginModalHandler(true))};
    return (
        <div>
            <Header isLogin={isLogin} logoutHandler={logoutHandler} showLoginModalHandler={showLoginModalHandler} isShowLoginModal={isShowLoginModal}/>
            <Sidebar />
            {isLogin ? <HomeLogined /> : <Home />}
            {isShowLoginModal ? <LoginModal /> : null}
            {}
            {/* {console.log(isLogin)} */}
            {console.log(isShowLoginModal)} 
        </div>
    )
}

export default FirstPage
