import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


// var token = ''
// let user = null

// const user1 = async() =>{
//     user =  await AsyncStorage.getItem('user')
// }
// user1();
// const initialState = {
    
//     auth:{
//         token: AsyncStorage.getItem('token'),
//         isAuthenticated:token ? true : false,
//         user:user
//     }
// };
// console.log('init',initialState.auth)


const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)));
export default store;