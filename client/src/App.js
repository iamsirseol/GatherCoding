//라이브러리
import HomeLogined from './pages/HomeLogined';
import React,{useState} from 'react'
import './css/reset.css';
import './css/homePage.css';
import Home from './pages/Home';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useSelector, useDispatch } from 'react-redux';
//리덕스
import { isLoginHandler } from './redux/actions/actions';


function App() {
  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const dispatch = useDispatch()
  const logoutHandler = () => { dispatch(isLoginHandler(false)) };
  console.log(isLogin)
  return (
    <div>
      <Header isLogin={isLogin} logoutHandler={logoutHandler}/>
      <Sidebar />
      {isLogin ? <HomeLogined /> : <Home />}
    </div>
  );
}


export default App;
