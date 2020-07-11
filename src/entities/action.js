import * as actionType from './actionType';

// export const Login = (data)=>{
//     return async dispatch=>{
//         dispatch(loginInit())
//         try{
//             const response = await fetch('',{
//                 method:'post',
//                 header:{
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify(data)
//             });
//             const json = response.json();
//             if(json.message!=="Success"){
//                 dispatch(Logout())
//             }else{
//                 const expirationDate = new Date(new Date().getTime() + 10*24*60*60*1000)
//                 const expirationTime = 10*24*60*60*1000;
//                 localStorage.setItem('userId',userId);
//                 localStorage.setItem('expirationDate',expirationDate);
//                 dispatch(checkAuthTimeout(expirationTime));
//                 dispatch(loginSuccess(json.data))
//             }
//         }catch(err){dispatch(Logout())}
//     }
// }

export const loginInit = ()=>{
    return {
        type:actionType.AUTH_INIT
    }
}

export const loginSuccess = (data)=>{
    return {
        type:actionType.AUTH_SUCCESS,
        payload:data
    }
}

export const loginFail = ()=>{
    return {
        type:actionType.AUTH_FAIL
    }
}


export const Logout = ()=>{
    return  dispatch=>{
        // localStorage.removeItem("expirationDate");
        // localStorage.removeItem("userId");
        dispatch({
            type:actionType.LOGOUT_SUCCESS,
        })
    }    
}

// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(Logout());
//         }, expirationTime);
//     };
// };


// export const checkAuthState = ()=>{
//     return async dispatch=>{
//         const userId = localStorage.getItem('userId');
//         if(!userId){
//             dispatch(Logout())
//         }else{
//             const expirationDate = localStorage.getItem('expirationDate');
//             if(expirationDate<=new Date()){
//                 dispatch(Logout());
//             }else{
//                 const bearer = 'Bearer '+ token;
//                 dispatch(loginInit())
//                 const response = await fetch('',{
//                     method:'get',
//                     headers:{
//                         'Authorization':bearer,
//                         'Content-Type':'application/json'
//                     }
//                 });
//                 const json = await response.json();
//                 if(json.message === "Success"){
//                     dispatch(loginSuccess(json.data))
//                 }else{
//                     dispatch(Logout())
//                 }
//                 dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
//             }
//         }
//     }
// }
