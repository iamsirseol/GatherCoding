import React from 'react'
import { Link } from "react-router-dom";

import '../css/sidebar.css'
function Sidebar() {
    return (
        <div className = 'sidebar'>
                    <Link to = '/'><button>홈화면</button></Link>
                    <Link to = '/list'><button>모각코 구하기</button></Link>
                    <Link to = '/location'><button>지역 설정</button></Link>
                    <Link to = '/til'><button>TIL 작성하기</button></Link>
        </div>
    )
}

export default Sidebar
