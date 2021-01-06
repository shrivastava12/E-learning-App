import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

const token =  async() => {
    return await AsyncStorage.getItem('token')
}

const user =  async() => {
    return await AsyncStorage.getItem('user')
}

const initialState = {
    auth:{
        token:token,
        isAuthenticated:token ? true : false,
        user:user
    }
};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =  createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)));

export default store;