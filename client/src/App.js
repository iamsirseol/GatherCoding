import HomeComponent from './pages/HomeComponent';
import React,{useState} from 'react'
import './css/reset.css';
import './css/homePage.css';
import Home from './pages/home';
import Header from './pages/Header'
import Sidebar from './pages/Sidebar'

function App() {
  const [login,setLogin] = useState(true)
  function logoutHandler(){
    setLogin(false)
  }
  
  return (
    <div>
      <Header login={login} logoutHandler={logoutHandler}/>
      <Sidebar />
      {!login ? <Home /> : <HomeComponent />}
    </div>
  );
}


export default App;
