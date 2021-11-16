import React from 'react'
import { useDispatch } from 'react-redux';
import {isShowSignUpModalHandler, isShowIsSignUpModalHandler } from '../redux/actions/actions';

import '../css/isSignUp.css'

function IsSignUp({alert, getMember}) {
    const dispatch = useDispatch();
    const closeSignUpModalHandler = () => { dispatch(isShowSignUpModalHandler(false))};
    const closeIsSignUpModalHandler = () => { dispatch(isShowIsSignUpModalHandler(false))};

    function closeCondition(){
        if(getMember){
            closeIsSignUpModalHandler()
            closeSignUpModalHandler()
        }else{
            closeIsSignUpModalHandler()
        }
    }
        return(
            <>
            <div className="is-sign-up-background">
            </div>
            <div className="is-sign-up-container">
            <p>{alert}</p>
            <button className="is-sign-up_close_btn"onClick={closeCondition}>
                    <span>
                        <i></i>
                        <i></i>
                    </span>
                </button>
            </div>
            </>
        )
}

export default IsSignUp