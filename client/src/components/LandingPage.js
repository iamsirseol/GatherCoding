import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import MapContainer from './MapContainer';
import MapPick from './MapPick';


function LandingPage() {
  const {add} = useSelector((state=>state.locationReducer),shallowEqual)
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('충북대 투썸')
  //검색어 입력 안하면 현재위치 나옴  
  useEffect(()=>[
        setPlace(add)
    ],[add])
  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onClick = {handleSubmit}>
        <input placeholder="장소입력 (ex: 충북대 투썸)" onChange={onChange} value={InputText} />
        <button onSubmit= {(e)=>handleSubmit(e)}>검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage