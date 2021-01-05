import React from 'react';
import {View,Text,TextInput} from 'react-native';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const test = () => {
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <View style={{flexDirection:'row',padding:10,margin:40,alignItems:'center',justifyContent:'flex-start'}}>
            <FontAweasome name='user-o' color='green' size={20} />
                <TextInput style={{borderBottomWidth:1,marginHorizontal:10,flex:1,}} placeholder='username' />
            
                <Feather style={{marginTop:8}}  name="check-circle" color="green" size={20} />
            </View>
        </View>
    )
};

export default test;