import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS, RETRIVE_TOKEN } from "./Type";
import Axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";


// to user login
export const login =  (email,password) => (dispatch) =>  {
    console.log(email,password);
    
    console.log('clicked')
    try{

        

        Axios.post('http://192.168.43.56:3000/users/login',{
            'email':email,
            'password':password
        }).then(async(res) => {
            console.log(res.data);

            if(res.status === 200){

               await AsyncStorage.setItem('token',res.data.token)
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                })
            }

           
        }).catch(e => console.log('err',e))

    }catch(e){
        console.log('catchBlock',e);
        dispatch({
            type:LOGIN_FAIL,
            payload:e
        })
    }


}

export const getAuthToken = () => (dispatch) => {
    let token=null;
    AsyncStorage.getItem('token').then((res) => {
       if(res){
           dispatch({
               type:RETRIVE_TOKEN,
               payload:res
           })
       }
   });
  
//    if(token){
//     dispatch({
//         type:RETRIVE_TOKEN,
//         payload:token
//     })
//    }

}