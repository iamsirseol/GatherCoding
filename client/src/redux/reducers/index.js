import { combineReducers } from 'redux';
import { 
  CHANGE_CITY,
  CHANGE_REGION,
    IS_LOGIN, 
    IS_LOADING,
    IS_SHOW_LOGIN_MODAL,
    IS_SHOW_SIGNUP_MODAL,
    
} from '../actions/actions';
import { initialState } from './initialState';


// * rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
    isLoginReducer,
    isLoadingReducer,
    isShowLoginModalReducer,
    isShowSignUpModalReducer,
    locationReducer,
})

function isLoginReducer(state = initialState.isLogin, action) {
    switch (action.type) {
        case IS_LOGIN :
            return Object.assign({},{
                isLogin : action.payload.isLogin
            });
        default : return state;
    }
}
function isLoadingReducer(state = initialState.isLoading, action) {
    switch (action.type) {
      case IS_LOADING : 
        return Object.assign({},{
          isLoading : action.payload.isLoading
        });
        default : return state
      }
}

function isShowLoginModalReducer(state = initialState.isShowLoginModal, action){
    switch (action.type) {
        case IS_SHOW_LOGIN_MODAL:
          return Object.assign({}, {
            isShowLoginModal: action.payload.isShowLoginModal
          });
        default: return state;
      }
}

function isShowSignUpModalReducer(state = initialState.isShowSignUpModal, action){
    switch (action.type) {
        case IS_SHOW_SIGNUP_MODAL :
          return Object.assign({}, {
            isShowSignUpModal: action.payload.isShowSignUpModal
          });
        default: return state;
      }
}

function locationReducer(state = initialState.location, action){
    switch (action.type) {
        case CHANGE_REGION :
          return {
            ...state,...action.payload
          }
        case CHANGE_CITY :
          return {
            ...state,...action.payload
          }
        default : return state;
      }
}

export default rootReducer;