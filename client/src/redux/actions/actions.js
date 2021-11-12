export const IS_LOGIN = 'IS_LOGIN';
export const IS_SHOW_LOGIN_MODAL = "IS_SHOW_LOGIN_MODAL";


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