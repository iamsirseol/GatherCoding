/* global kakao */
import React from 'react';

import axios from 'axios';
import { useSelector, useDispatch ,shallowEqual} from 'react-redux';
import '../css/kakao.css';

const { kakao } = window;
function Map() {
    const {lat,lon} = useSelector((state=>state.locationReducer),shallowEqual)
    const container = document.getElementById('kakao-map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    
        
    return (
        <div className = 'kakao-map'>
            ad
        </div>
    )
}

export default Map
