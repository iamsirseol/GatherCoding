import React, { useEffect, useState } from "react"
import { useSelector,shallowEqual } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "../appbar/AppBar"
import Toolbar from "../toolbar/Toolbar"
import LinearProgress from "@material-ui/core/LinearProgress"
import { alpha } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  
  map: {
    width: "100%",
    height: "100%"
  },
  progress: {
    position: "fixed",
    zIndex: 9999,
    width: "100%",
    top: 56,
    [theme.breakpoints.up("sm")]: {
      top: 64
    }
  }
}))

const Map = () => {
  const {lat,lon} = useSelector((state=>state.locationReducer),shallowEqual)
  const [pending, setPending] = useState(true)
  const [map, setMap] = useState(null)
  const kakao = window.kakao
  const classes = useStyles()

  /**
   * 장소 검색
   * @param keyword 검색어
   */
  const searchPlace = keyword => {
    setPending(true)
    const places = new kakao.maps.services.Places()
    places.keywordSearch(keyword, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const firstItem = result[0]
        const { x, y } = firstItem
        const moveLatLng = new kakao.maps.LatLng(y, x)
        map.panTo(moveLatLng)
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 없습니다.")
      } else {
        alert("서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
      }
      setPending(false)
    })
  }

  const handleSearch = searchText => {
    if (searchText) {
      searchPlace(searchText)
    }
  }

  useEffect(() => {
    console.log("effect")
    const container = document.getElementById("map") //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    }

    const map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
    //마커가 표시될 위치입니다.
    var marker = new kakao.maps.Marker({ 
      // 지도 중심좌표에 마커를 생성합니다 
      position: map.getCenter() 
    }); 


    // var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
    // // 마커를 생성합니다
    //   var marker = new kakao.maps.Marker({
    //     position: markerPosition,
    //     clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    // });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

var iwContent = '<div style="padding:5px;"> <a href = "http://localhost:3000/roominfo">여기서 모각코 모임을 만듭니다.</a> <br/></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(lat,lon); //인포윈도우 표시 위치입니다
    // iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    // map: map,
    position : iwPosition, 
    content : iwContent,
    // removable : iwRemoveable 
});
// infowindow.open(map, marker); 
  
// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
  // 마커 위에 인포윈도우를 표시합니다
  console.log('hello')
  // infowindow.open(map, marker);  
});
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
  infowindow.open(map, marker);  
  // 클릭한 위도, 경도 정보를 가져옵니다 
  var latlng = mouseEvent.latLng; 
  
  // 마커 위치를 클릭한 위치로 옮깁니다
  marker.setPosition(latlng);
  infowindow.setPosition(latlng)

  console.log(latlng.getLat(),latlng.getLng())
  
});


    setMap(map)
    setPending(false)
  }, [kakao.maps])

  return (
    <>
      <AppBar onSearch={handleSearch} />
      {pending && <LinearProgress color="secondary" className={classes.progress} />}
      {/* <Toolbar /> */}
      <div id="map" className={classes.map} ></div>
    </>
  )
}

export default Map
