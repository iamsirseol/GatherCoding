import React, { useEffect } from 'react';
import { useSelector,shallowEqual } from 'react-redux';


const MapPick = () => {
    const {lat,lon} = useSelector((state=>state.locationReducer),shallowEqual)
    const { kakao } = window;
  
    
    useEffect(() => {
        const container = document.querySelector('.kakao-map');
        const options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        //위도, 경도로 변환 및 마커표시
        var markerPosition  = new kakao.maps.LatLng(lat, lon); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, [lat,lon]);
    return (
        <div className='kakao-map' style={{
            width: '100%',
            height: '300px'
        }}></div>
    );
}

export default MapPick;