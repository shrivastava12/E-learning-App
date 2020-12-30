import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import VideoPlayerScreen from './VideoPlayerScreen';

const CoursePlayScreen =  () => {
 
    const [check,setCheck] =  useState(true);

    const onChange =  () => {
        setCheck(!check);
        console.log('click here');
       
    }
  
    

    return(
        <View style={styles.container}>
           
               <VideoPlayerScreen/>     
            <View>
                <TouchableOpacity activeOpacity={0.6}  onPress={onChange}>
                <View style={{height:70,flexDirection:'row', borderBottomWidth:0.3,borderBottomColor:'grey',justifyContent:'flex-start',alignItems:'center',padding:5}}>
                    <Text style={{color:'grey'}}>0.1</Text>
                    <Text style={{marginHorizontal:10,fontSize:17}}>Get started with react js</Text>
                    
                </View>
                </TouchableOpacity>

               {
                   check ?   <View>

               
                   <View style={{justifyContent:'center',height:60,borderBottomWidth:0.5
                   ,borderBottomColor:'lightgrey',}}>
                       <Text style={{marginLeft:30}}>Section2 introduction</Text>
                   </View>
                   
                   <View style={{justifyContent:'center',height:60,borderBottomWidth:0.5
                   ,borderBottomColor:'lightgrey',}}>
                       <Text style={{marginLeft:30}}>Section2 introduction</Text>
                   </View>
   
                   <View style={{justifyContent:'center',height:60,borderBottomWidth:0.5
                   ,borderBottomColor:'lightgrey',}}>
                       <Text style={{marginLeft:30}}>Section2 introduction</Text>
                   </View>
               </View>  : null
               } 
                            

               
              
                
            </View>
        </View>
    )

};

const styles =  StyleSheet.create({
    container:{
        flex:1
    },
  
})

export default CoursePlayScreen;