import { LOGIN_FAIL ,LOGIN_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS } from "../actions/Type";
import AsyncStorage from '@react-native-community/async-storage';
const initialState = {

    token:AsyncStorage.getItem('token'),
    isAuthenticated:false,
    user:null

};

export default function(state = initialState,action) {
    
    const {type,payload} = action;
    switch(type){
            case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                AsyncStorage.setItem('token',payload.token);
                AsyncStorage.setItem('user',JSON.stringify(payload.user));

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
