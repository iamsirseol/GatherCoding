import React from 'react'
import { Link } from "react-router-dom";
import { userInfo } from './dummy';
import '../css/sidebar.css'
function Sidebar() {
    return (
        <div className = 'sidebar'>
                    <Link to = '/'><button>홈화면</button></Link>
                    <Link to = '/list'><button>모각코 구하기</button></Link>
                    <span><button onClick = {()=>window.open(userInfo.blog,'_blank')}>TIL 작성하기</button></span>
        </div>
    )
}

export default Sidebar
