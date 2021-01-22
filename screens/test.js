import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-community/async-storage';
import { login } from '../actions/authAction';
import { connect } from 'react-redux';


const test = ({login,isAuthenticated}) => {

    // AsyncStorage.setItem('dfsd','dfsdfs')

   const onClick =async () => {
       
       const abc = await AsyncStorage.getItem('dfsd')
       console.log(abc)
   }

    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <View style={{flexDirection:'row',padding:10,margin:40,alignItems:'center',justifyContent:'flex-start'}}>
            <FontAweasome name='user-o' color='green' size={20} />
                <TextInput style={{borderBottomWidth:1,marginHorizontal:10,flex:1,}} placeholder='username' />
            
                <Feather style={{marginTop:8}}  name="check-circle" color="green" size={20} />
            </View>
            <Button title="click here" onPress={() =>  onClick()} />
        </View>
    )
};

const mapStateToProps = state =>  ({
    isAuthenticated:state.auth.isAuthenticated
})

export default  connect(mapStateToProps,{login})(test);