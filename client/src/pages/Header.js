import React from 'react'
import '../css/header.css'
function Header() {
    return (
        <header>
                
                <img className = 'page-logo' src = 'https://user-images.githubusercontent.com/75051059/141219381-c64490bf-907d-4929-8b1b-ad7891604a58.png'/>
                    
                <div className = 'header-right'>
                    <button>개인정보</button>
                    <button>로그아웃</button>
                </div>        
        </header>
    )
}

export default Header
