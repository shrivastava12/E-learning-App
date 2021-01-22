

import { LOGIN_FAIL ,LOGIN_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS, RETRIVE_TOKEN } from "../actions/Type";
import AsyncStorage from '@react-native-community/async-storage'

// let token;
// const gatData = async() => {
 
//     let token =  await AsyncStorage.getItem('token');
//     return token

// }
// gatData().then(data => token = data)

const initialState = {

    token:'',
    isAuthenticated:false,
    user:null,
    isLoading:true

};


export default function(state=initialState ,action) {
    
    const {type,payload} = action;
    switch(type){
            case RETRIVE_TOKEN:
                return{
                    ...state,
                    token:payload,
                    isAuthenticated:true,
                    isLoading:false
                }
            case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                

                return{
                    ...state,
                    token:payload.token,
                    isAuthenticated:true,
                    user:payload.user
                };

            case LOGIN_FAIL:
            case REGISTER_FAIL:
            case LOGIN_SUCCESS:
                return{
                    ...state,
                    isAuthenticated:false,
                    user:AsyncStorage.removeItem('user'),
                    token:AsyncStorage.removeItem('token')
                }

            default:
                return state;

        }
}
