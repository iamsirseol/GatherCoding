//라이브러리
import HomeLogined from './pages/HomeLogined';
import React ,{useEffect} from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import './css/reset.css';
import './css/homePage.css';
import Home from './pages/Home';
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'

import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'
// import { useSelector, useDispatch } from 'react-redux';
//리덕스
// import { isLoginHandler, isShowLoginModalHandler } from './redux/actions/actions';
// * 사이드바, 헤더 사용시 주석까지 복붙하기 


import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// *
//리덕스


import FirstPage from './pages/FirstPage';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RoomInfo from './pages/RoomInfo';
import { changeCity, changeLat, changeLon, changeRegion, isLoadingHandler } from './redux/actions/actions';




function App() {
  
  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const isShowLoginModal = useSelector(state => state.isShowLoginModalReducer.isShowLoginModal)
  const isShowSignUpModal = useSelector(state => state.isShowSignUpModalReducer.isShowSignUpModal)
  const isLoading = useSelector(state => state.isLoadingReducer.isLoading)
  //shallowEqual : 이전값이 바뀌었을경우에만 렌더링함. useSelector에서 한번에 두 값 가져올때 사용
  const {region,city,lat,lon} = useSelector((state=>state.locationReducer),shallowEqual)

  const dispatch = useDispatch()
  
  function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(typeof lat,lon )
    dispatch(changeLon(lon))
    dispatch(changeLat(lat))
    console.log('axios진입전')
    axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`
    ,{headers:{Authorization:`KakaoAK ${process.env.REACT_APP_REST_API}`}}
    )
    .then(res=>{
        
        
        
        // console.log(res.data.documents)
        dispatch(changeRegion(res.data.documents[0].address.region_1depth_name))
        dispatch(changeCity(res.data.documents[0].address.region_2depth_name)) 
        dispatch(isLoadingHandler(false))
    }
    ).catch(e=>console.log(e))
  }
  function onGeoError(){
      alert("위치권한을 확인해주세요");
  }
  
  useEffect(()=>{
      
      //!어떻게 빠르게 받아오지??
        async function gtloc() { navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)}
          gtloc()
      
  },[region,city])

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
        <Route exact path = '/'><FirstPage /></Route>
        <Route path = '/myroom'><HomeLogined /></Route>
        <Route path = '/roominfo'><RoomInfo /></Route>
        
      </Switch>
      {isShowLoginModal ? <LoginModal /> : null}
      {isShowSignUpModal ? <SignUpModal /> : null}
    </div>
    // 위에 Link로 사용할 수 있게 페이지나 컴포넌트로 만들어두기
  );
}


export default App;
