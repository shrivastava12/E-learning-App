import React from 'react';
import {View,Image,Text,TouchableOpacity, TouchableOpacityBase} from 'react-native';
const HorizontalScroll =  ({onHandlePress}) => {

    return(
        
        <TouchableOpacity activeOpacity={0.8} onPress={() => {onHandlePress()}}>
        <View style={{height:170,width:150,marginLeft:20,borderWidth:1,borderColor:'#dddddd'}}>
             <View style={{flex:2}}>
                    <Image source={{uri :'https://fakeimg.pl/350x200/ff0000/000/'}} 
                     style={{flex:1, width:null, height:null, resizeMode:'cover'}} />
              </View>
             <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                 <Text>This SCC</Text>
             </View>
         </View>
         </TouchableOpacity>
    )
};

export default HorizontalScroll;