//라이브러리
import HomeLogined from './pages/HomeLogined';
import React, {useState} from 'react'
import './css/reset.css';
import './css/homePage.css';
import Home from './pages/Home';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import LoginModal from './components/LoginModal'
import { useSelector, useDispatch } from 'react-redux';
//리덕스
import { isLoginHandler, isShowLoginModalHandler } from './redux/actions/actions';

//리덕스
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler } from './redux/actions/actions';


function App() {

  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)

  const dispatch = useDispatch()
  const logoutHandler = () => { dispatch(isLoginHandler(false)) };
  const showLoginModalHandler = (e) => { dispatch(isShowLoginModalHandler(true))};
  // console.log(isLogin)
  // console.log(isShowLoginModal)
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
    // 위에 Link로 사용할 수 있게 페이지나 컴포넌트로 만들어두기
  );
}


export default App;
