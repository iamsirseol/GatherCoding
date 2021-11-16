//라이브러리
import HomeLogined from './pages/HomeLogined';
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './css/reset.css';
import './css/homePage.css';
import Home from './pages/Home';
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'

import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'

import RoomOutModal from './components/RoomOutModal'
import RoomInModal from './components/RoomInModal'
import RoomInfoChangeModal from './components/RoomInfoChangeModal'
// import { useSelector, useDispatch } from 'react-redux';
//리덕스
// import { isLoginHandler, isShowLoginModalHandler } from './redux/actions/actions';
// * 사이드바, 헤더 사용시 주석까지 복붙하기 


import { useSelector, useDispatch } from 'react-redux';
// *
//리덕스


import FirstPage from './pages/FirstPage';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RoomInfo from './pages/RoomInfo';



function App() {
  //* 헤더 사용시 주석까지 복붙
  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)
  const isShowSignUpModal = useSelector(state => state.isShowSignUpModalReducer.isShowSignUpModal)

  const isShowRoomOutModal = useSelector(state => state.isShowRoomOutModalReducer.isShowRoomOutModal)
  const isShowRoomInModal = useSelector(state => state.isShowRoomInModalReducer.isShowRoomInModal)
  const isShowRoomInfoChangeModal = useSelector(state => state.isShowRoomInfoChangeModalReducer.isShowRoomInfoChangeModal)
  const dispatch = useDispatch()
  //*



  // const dispatch = useDispatch()
  // const logoutHandler = () => { dispatch(isLoginHandler(false)) };
  // const showLoginModalHandler = (e) => { dispatch(isShowLoginModalHandler(true))};
  // console.log(isLogin)
  // console.log(isShowLoginModal)
  return (
    <div>
      <Header />
      <Sidebar />
      {/* {isLogin ? <HomeLogined /> : <Home />} */}
      {/* {isShowLoginModal ? <LoginModal /> : null} */}
      {/* {} */}
      {/* {console.log(isLogin)} */}
      {/* {console.log(isShowLoginModal)} */}
      <Switch>
        <Route exact path='/'><FirstPage /></Route>
        <Route path='/myroom'><HomeLogined /></Route>
        <Route path='/roominfo'><RoomInfo /></Route>

      </Switch>
      {isShowLoginModal ? <LoginModal /> : null}
      {isShowSignUpModal ? <SignUpModal /> : null}
      {isShowRoomOutModal ? <RoomOutModal /> : null}
      {isShowRoomInModal ? <RoomInModal /> : null}
      {isShowRoomInfoChangeModal ? <RoomInfoChangeModal /> : null}
    </div>
    // 위에 Link로 사용할 수 있게 페이지나 컴포넌트로 만들어두기
  );
}


export default App;
