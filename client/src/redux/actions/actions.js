export const IS_LOGIN = 'IS_LOGIN';
export const IS_SHOW_LOGIN_MODAL = "IS_SHOW_LOGIN_MODAL";
export const IS_SHOW_SIGNUP_MODAL = "IS_SHOW_SIGNUP_MODAL";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_REGION = "CHANGE_REGION";

export function isLoginHandler (boolean) {
    return {
        type : IS_LOGIN,
        payload : {
            isLogin : boolean
        }
    }
};
export function isShowLoginModalHandler (boolean) {
    return {
        type : IS_SHOW_LOGIN_MODAL,
        payload : {
            isShowLoginModal : boolean
        }
    }
};
export function isShowSignUpModalHandler (boolean) {
    return {
        type : IS_SHOW_SIGNUP_MODAL,
        payload : {
            isShowSignUpModal : boolean
        }
    }
};
export function changeRegion (region) {
    return {
        type : CHANGE_REGION,
        payload : {
            region
        }
    }
};
export function changeCity (city) {
    return {
        type : CHANGE_CITY,
        payload : {
            city
        }
    }
}