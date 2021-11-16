export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOADING = 'IS_LOADING';
export const IS_SHOW_LOGIN_MODAL = "IS_SHOW_LOGIN_MODAL";
export const IS_SHOW_SIGNUP_MODAL = "IS_SHOW_SIGNUP_MODAL";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_REGION = "CHANGE_REGION";
export const CHANGE_LAT = 'CHANGE_LAT';
export const CHANGE_LON = 'CHANGE_LON';
export const IS_SHOW_CREATE_ROOM_MODAL = "IS_SHOW_CREATE_ROOM_MODAL";
export const IS_SHOW_IS_SIGNUP_MODAL = "IS_SHOW_IS_SIGNUP_MODAL"

export function isLoginHandler (boolean) {
    return {
        type : IS_LOGIN,
        payload : {
            isLogin : boolean
        }
    }
};
export function isLoadingHandler (boolean) {
    return {
        type : IS_LOADING,
        payload : {
            isLoading : boolean
        }
    }
}
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
export function isShowCreateRoomModalHandler (boolean) {
    return {
        type : IS_SHOW_CREATE_ROOM_MODAL,
        payload : {
            isShowCreateRoomModal : boolean
        }
    }
}
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

export function changeLat(lat){
    return {
        type : CHANGE_LAT,
        payload : {
            lat
        }
    }
}
export function changeLon(lon){
    return {
        type : CHANGE_LON,
        payload : {
            lon
        }
    }
}
//
export function isShowIsSignUpModalHandler (boolean) {
    return {
        type : IS_SHOW_IS_SIGNUP_MODAL,
        payload : {
            isShowIsSignUpModal : boolean
        }
    }
};
