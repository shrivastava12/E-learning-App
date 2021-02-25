import React from 'react';
import {View,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const QuizItem = () => {
    return(

        <View style={{flexDirection:'row',marginBottom:10,justifyContent:'flex-start',backgroundColor:'#ffff',height:100}}>
        <View style={{height:100,width:120,elevation:5,justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}>
            <FontAwesome name="clock-o"  size={30} color="black" ></FontAwesome>
            <Text style={{alignSelf:'center',marginTop:5}}>History</Text>
         
                </View>
                
            <View style={{flex:1,padding:10}}>
                <Text numberOfLines={2} style={{textAlign:'justify',fontFamily:'arial',fontSize:16,fontWeight:'100'}}>Target SSC CGL 2020-21 with 1000_ Question shdfshdfs</Text>
                <Text style={{marginTop:18,textShadowColor:'grey',color:'grey',alignSelf:'flex-end'}}>12Jan 2020 . 15Que . 7Min</Text>
            </View>
        </View>
    )
};

export default QuizItem;