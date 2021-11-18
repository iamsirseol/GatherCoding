import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../css/updateModal.css'

function UpdateModal({setShowUpdateModal, showUpdateModal, sucUpdate}) {
    let history = useHistory()

    function closeCondition(){
        if(sucUpdate){
            setShowUpdateModal(false)
            history.push('/myroom')
        }else{
            setShowUpdateModal(false)
        }
    }
        return(
        <>
            <div className="update-modal-background">
            </div>
            <div className="update-modal-container">
            {sucUpdate ? <p>정보 변경이 성공했습니다.</p> : <p>정보 변경이 실패하였습니다 비밀번호를 확인해주세요</p>}
            <button className="update-modal-close-btn"onClick={closeCondition}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
            </div>
        </>
        )
}

export default UpdateModal