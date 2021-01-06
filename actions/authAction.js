import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT_SUCCESS } from "./Type";
import Axios from 'axios';


export const login =  (email,password) => async(dispatch) =>  {
    console.log(email,password);
    
    console.log('clicked')
    try{

        await Axios.post('http://localhost:3000/users/login',{
            'email':JSON.stringify('shrivastava@gmail.com'),
            'password':JSON.stringify('1234565')
        }).then((res) => {
            console.log(res.data);
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            })
        }).catch(e => console.log('err',e))

    }catch(e){
        console.log('catchBlock',e);
        dispatch({
            type:LOGIN_FAIL,
            payload:e
        })
    }

}