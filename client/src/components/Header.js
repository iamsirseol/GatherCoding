import React from 'react'
import '../css/header.css'
function Header({login, logoutHandler}) {
    console.log(logoutHandler)
    return (
        <header>
                
                <img className = 'page-logo' src = 'https://user-images.githubusercontent.com/75051059/141219381-c64490bf-907d-4929-8b1b-ad7891604a58.png'/>
                    
                <div className = 'header-right'>
                    <button>{login ? '개인정보' : '회원가입' }</button>
                    <button onClick = {logoutHandler}>{login ? '로그아웃' : '로그인' }</button>
                </div>        
        </header>
    )
}

export default Header
