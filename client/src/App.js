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


function App() {
  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
<<<<<<< HEAD
  const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)
  

=======
>>>>>>> 7b5b810a30f3caf88dac682927f0d0e3010e0898
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
<<<<<<< HEAD
      {isShowLoginModal ? <LoginModal /> : null}
      {/* {console.log(isLogin)} */}
      {console.log(isShowLoginModal)}
=======
>>>>>>> 7b5b810a30f3caf88dac682927f0d0e3010e0898
    </div>
    // 위에 Link로 사용할 수 있게 페이지나 컴포넌트로 만들어두기
  );
}


export default App;
