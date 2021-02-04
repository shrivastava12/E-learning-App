import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
const HorizontalScroll =  ({onHandlePress}) => {

    return(
        
        <TouchableOpacity activeOpacity={0.8} onPress={() => {onHandlePress()}}>
        <View style={{height:170,width:170,marginLeft:20,borderWidth:1,borderColor:'#dddddd'}}>
             <View style={{flex:3}}>
                    <Image source={{uri :'https://i.ytimg.com/vi/mWOpHgeZjxc/maxresdefault.jpg'}} 
                     style={{flex:1, width:'100%', height:null, resizeMode:'cover'}} />
              </View>
             <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                 <Text>This SCC</Text>
             </View>
         </View>
         </TouchableOpacity>
    )
};

export default HorizontalScroll;