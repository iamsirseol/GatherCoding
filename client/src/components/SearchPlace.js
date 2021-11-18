import React, { useState } from "react";
import MapPick from "./kakao/map/MapPick";

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button onClick = {(e)=>{e.preventDefault()}}type="submit">검색</button>
    
      <MapPick searchPlace={place} />
    </>
  );
};

export default SearchPlace;