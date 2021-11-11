import { combineReducers } from 'redux';
import { 
    IS_LOGIN ,
} from '../actions/actions';
import { initialState } from './initialState';


//rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
    isLoginReducer
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

export default rootReducer;