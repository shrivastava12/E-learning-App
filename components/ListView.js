import React from 'react';
import {View,Image,Text,TouchableNativeFeedback,TouchableOpacity,Platform, TouchableOpacityBase} from 'react-native';

const ListView = () => {

    
 
    return(
        <TouchableOpacity onPress={() => {}} style={{backgroundColor:'#fff',flexDirection:'row',elevation:4,justifyContent:'flex-start',marginTop:5,padding:6,height:100,width:'100%'}}>
        <View style={{height:90,width:180}}>
        <Image source={{uri :'https://fakeimg.pl/350x200/ff0000/000/'}} 
              style={{flex:1, width:null, height:null, resizeMode:'cover'}} />
        </View>
        <View style={{flex:1,marginHorizontal:10}}>
            <Text>jdfasjdfassvzdfsdfsdfsddfsdfasdfsdfsdfssdfsdfsdsdfsdf</Text>
        </View>
       
         </TouchableOpacity>


    )
};

export default ListView;