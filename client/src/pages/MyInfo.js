import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import CheckSignMsg from '../components/CheckSignMsg'
import '../css/myInfo.css'
import { accessToken } from '../redux/reducers/initialState';

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


    // axios.get(url, {
    //     headers: {
    //         Cookie: "cookie1=value; cookie2=value; cookie3=value;"
    //     }
    // }).then(response => {
    //     console.log(response);
    // });
    useEffect(() => {
        /*const curUser = window.sessionStorage.getItem('email');*/
        // 로딩 넣으면 좋을듯
        const token = window.sessionStorage.getItem('email')


        // const token = accessToken;


        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        console.log(token);
        return axios.post('http://localhost:4000/users/userinfo', { accessToken: token })
            // .then(response => response.json())
            .then(res => {
                if (!res.data.data) {
                    console.log(res);
                    const blog = res.data.blog;
                    setUpdateUrl(blog)
                    const username = res.data.username;
                    setCurUserNickname(username)
                    const image = res.data.image;
                    setCurUserImage(image)
                } else {
                    console.log(res);
                    const blog = res.data.data.blog;
                    setUpdateUrl(blog)
                    const username = res.data.data.username;
                    setCurUserNickname(username)
                    const image = res.data.data.image;
                    setCurUserImage(image)
                }

            })
            .catch(err => {
                console.log('fail')// 에러창을 추후에 만들면 좋을듯 싶음
            })
    }, [])

    function userPwInfo(e) {
        setCurUserPw(e.target.value)
    }
    function chagePwInfo(e) {
        setUpdatePw(e.target.value)
    }
    function checkChagePwInfo(e) {
        setCheckUpdatePw(e.target.value)
    }
    function changeNickName(e) {
        setCurUserNickname(e.target.value)
    }
    function chageUrl(e) {
        setUpdateUrl(e.target.value)
    }
    function changeImage(e) {
        setCurUserImage(e.target.value)
    }

    function updateInfoRequest() { // 업데이트 요청

    }

    const inputValue = useRef(null);

    function inputFileHandler(inputValue, setCurUserImage) {
        const image = inputValue.current.files;
        setCurUserImage(image[0])
        console.log(curUserImage)
    }

    function inputBtn(e, inputValue) {
        e.preventDefault();
        inputValue.current.click()
    }


    return (
        <div className='my-info-background'>
            <div className='my-info-container'>
                <h2>{ }님의 회원정보</h2>
                <div className="my-info-update">
                    <form className="my-info-form" onSubmit={updateInfoRequest}>
                        <input className="my-info-password" type="password" name="password" placeholder="현재 비밀번호" value={curUserPw} onChange={(e) => userPwInfo(e)} />
                        {/* 비밀번호 일치 안함 떠야 되나 아 변경 누르기 눌렀을때 비밀번호를 확인해주세요 가 뜨면 되겠네 망할거ㄹㄴㅁㅁㄴㄹㅇ ㅇㄹㄴㅁ  */}
                        <input className="update-pw" type="password" name="password" placeholder="수정 비밀번호" value={updatePw} onChange={(e) => chagePwInfo(e)} />
                        <input className="check-update-pw" type="password" placeholder="비밀번호 확인" value={checkUpdatePw} onChange={(e) => checkChagePwInfo(e)} />{!samePw ? <CheckSignMsg message={'비밀번호가 일치하지 않습니다.'} /> : null}
                        <input className="update-nick-name" type="text" name="username" placeholder="닉네임" value={curUserNickname} onChange={(e) => changeNickName(e)} />
                        <input className="update-url" type="text" name="blog" placeholder="깃허브 주소" value={updateUrl} onChange={(e) => chageUrl(e)} />
                        <div className="update-image-box">
                            <input name="image" className="update-input-blind" ref={inputValue} type="file" onChange={(e) => inputFileHandler(inputValue, setCurUserImage)} />
                            {<img src={curUserImage} />}
                            <p>프로필 이미지</p>
                        </div>
                        <button type="button" className="update-btn">정보변경하기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyInfo