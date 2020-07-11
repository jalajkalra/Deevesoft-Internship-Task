import {
    AUTH_INIT,
    AUTH_SUCCESS,
    LOGOUT_SUCCESS,
    AUTH_FAIL
} from './actionType';

const INIT_STATE = {
    isLoggedIn:false,
    isLoading:false,
    apiResponse:null
}

const reducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case AUTH_INIT:
            return{...state,isLoading:true}
        case AUTH_SUCCESS:
            return{...state,isLoading:false,isLoggedIn:true,apiResponse:action.payload}
        case AUTH_FAIL:
            return{...state,isLoading:false,isLoggedIn:false,apiResponse:null}    
        case LOGOUT_SUCCESS:
            return{...state,isLoading:false,isLoggedIn:false,apiResponse:null}
        default:
            return state            
    }
}
export default reducer;