import React,{ useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

function ImageUpload(){

    const [signUpImage, setSignUpImage] = useState('');
    const inputValue = useRef(null);

    function inputFileHandler(inputValue, setSignUpImage) {
        const image = inputValue.current.files;
        setSignUpImage(image[0])
        console.log(signUpImage)
    }

    function inputBtn(e, inputValue){
        e.preventDefault();
        inputValue.current.click()
    }

    // function inputImageHandler(){
    //     const image = signUpImage.current.files
    // }


    return (
        <div className="image-upload-box">
            <input ref={inputValue} type="file" onChange={(e) => inputFileHandler(inputValue, setSignUpImage)}/>
            {signUpImage ? <div className="img_preview" onClick={(e) => inputBtn(e, inputValue)} style={{ backgroundImage: `url('${URL.createObjectURL(signUpImage) }')`,
            backgroundSize: 'cover',
            }}
          ></div>: <div className="image-upload-box"></div>}
        </div>
    )
}

export default ImageUpload