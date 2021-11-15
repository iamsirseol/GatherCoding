import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import '../css/myInfo.css'
function MyInfo() {
    const [loading, setLoading] = useState(true);

    const [curUserPw, setCurUserPw] = useState('');
    const [updatePw, setUpdatePw] = useState('')
    const [checkUpdatePw, setCheckUpdatePw] = useState(''); 
    const [curUserNickname, setCurUserNickname] = useState('');
    const [updateUrl, setUpdateUrl] = useState(''); 
    const [curUserImage, setCurUserImage] = useState('');
    
    const [validPw, setValidPw] = useState(false); // 유효성(문자, 숫자, 특수문자 각 하나씩)
    const [samePw, setSamePw] = useState(false); // 비번 확인용
    // 닉네임 중복확인 하기 싫어 힘들어

    // 이미지는 삭제 말고 기본이미지로 변경 누르면 변경 ㄱㄱ 아니면 그냥 이미지를 하지말고 폰트 어썸 같은데서 그냥 아이콘 하나 넣자 귀여운걸로



//     <div className="image-upload-box">
//     <input name="image" className="input-blind" ref={inputValue} type="file" onChange={(e) => inputFileHandler(inputValue, setSignUpImage)}/>
//     {signUpImage ? <div className="img_preview" onClick={(e) => inputBtn(e, inputValue)} style={{ backgroundImage: `url('${URL.createObjectURL(signUpImage) }')`}}
//   ></div>: <div className="img_preview" onClick={(e) => inputBtn(e, inputValue)}></div>} 끼에에에에에엑 사용할듯

    return (
        <div className = 'my-info-background'>
            {/* <div className = 'my-info-container'>
                <h2>{}님의 회원정보</h2> {/* 유저 이름을 리덕스로 저장할까 여기에 불러올때 한꺼번에 할까 ----여기 주석 추가
                <div className="my-info-update">
                    <form className="my-info-form"> {/*onSubmit={updateInfoRequest} ----여기 주석 추가
                        <input className="sign-up-password" type="password" name="password" placeholder="비밀번호" value={signUpPw} onChange={(e) => changePwValue(e)} />
                        {!validPw ? <CheckSignUpMsg message={'숫자, 영문, 특수문자 각 1자리 이상의 8~16 자리'} /> : null}
                        <input className="sign-up-password" type="password" name="password" placeholder="비밀번호" value={signUpPw} onChange={(e) => changePwValue(e)} />
                        {!validPw ? <CheckSignUpMsg message={'숫자, 영문, 특수문자 각 1자리 이상의 8~16 자리'} /> : null}
                        <input className="check-password" type="password" placeholder="비밀번호 확인" value={checkPw}onChange={(e) => checkPwValue(e)} />{!samePw ?  <CheckSignUpMsg message={'비밀번호가 일치하지 않습니다.'} /> : null}
                        <input className="sign-up-nickname" type="text" name="username" placeholder="닉네임" value={signUpNickname} onChange={(e) => changeNicknameValue(e)} />
                        <input className="sign-up-url" type="text" name="blog" placeholder="깃허브 주소" value={signUpUrl} onChange={(e) => changeUrlValue(e)} />
                        <ImageUpload signUpImage={signUpImage} setSignUpImage ={setSignUpImage}/>
                        <button type="submit" className="sign-up-btn" disabled={validEmail && validPw  && samePw ? false : true}>정보수정하기</button>
                    </form>
                </div>
            </div> */}
        </div>
    )
}

export default MyInfo