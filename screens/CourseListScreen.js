import React from 'react';
import {View,Text,ScrollView,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CourseListScreen =  ({navigation}) => {
    return(
<ScrollView style={{flex:1}}>
    <TouchableOpacity onPress={() =>  {
        navigation.navigate('course')
    }} >
            <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start',padding:20,height:180,backgroundColor:'#fff',marginBottom:12,borderBottomColor:'grey',borderBottomWidth:0.5}}>
            
            <View style={{height:140,width:140,
                backgroundColor:'red',borderRadius:10}}>
                <Text>THis is me</Text>
            </View>
            <View style={{marginHorizontal:20,flex:1,alignItems:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'justify'}}>SSC MAHA PACK | (Live Classes) </Text>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
                
                    <Text style={{fontSize:19,fontWeight:'bold',color:'green'}}>RS </Text>
                    <Text style={{fontWeight:'bold',fontSize:19,color:'red'}}>2000   </Text>
                    <Text>50% OFF</Text>
                </View>
                <MaterialCommunityIcons name="offer" size={38} color="red" ><Text style={{fontSize:14}}>   Offer available</Text></MaterialCommunityIcons>
            </View>
        </View>
    </TouchableOpacity>
   
    <TouchableOpacity onPress={() =>  {navigation.navigate('course')}} >
            <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start',padding:20,height:180,backgroundColor:'#fff',marginBottom:12,borderBottomColor:'grey',borderBottomWidth:0.5}}>
            
            <View style={{height:140,width:140,
                backgroundColor:'red',borderRadius:10}}>
                <Text>THis is me</Text>
            </View>
            <View style={{marginHorizontal:20,flex:1,alignItems:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'justify'}}>SSC MAHA PACK | (Live Classes) </Text>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
                
                    <Text style={{fontSize:19,fontWeight:'bold',color:'green'}}>RS </Text>
                    <Text style={{fontWeight:'bold',fontSize:19,color:'red'}}>2000   </Text>

                    <Text>50% OFF</Text>
                </View>
                <MaterialCommunityIcons name="offer" size={38} color="red" ><Text style={{fontSize:14}}>   Offer available</Text></MaterialCommunityIcons>
            </View>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>  {console.log('pressed')}} >
            <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start',padding:20,height:180,backgroundColor:'#fff',marginBottom:12,borderBottomColor:'grey',borderBottomWidth:0.5}}>
            
            <View style={{height:140,width:140,
                backgroundColor:'red',borderRadius:10}}>
                <Text>THis is me</Text>
            </View>
            <View style={{marginHorizontal:20,flex:1,alignItems:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'justify'}}>SSC MAHA PACK | (Live Classes) </Text>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
                
                    <Text style={{fontSize:19,fontWeight:'bold',color:'green'}}>RS </Text>
                    <Text style={{fontWeight:'bold',fontSize:19,color:'red'}}>2000   </Text>

                    <Text>50% OFF</Text>
                </View>
                <MaterialCommunityIcons name="offer" size={38} color="red" ><Text style={{fontSize:14}}>   Offer available</Text></MaterialCommunityIcons>
            </View>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>  {console.log('pressed')}} >
            <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start',padding:20,height:180,backgroundColor:'#fff',marginBottom:12,borderBottomColor:'grey',borderBottomWidth:0.5}}>
            
            <View style={{height:140,width:140,
                backgroundColor:'red',borderRadius:10}}>
                <Text>THis is me</Text>
            </View>
            <View style={{marginHorizontal:20,flex:1,alignItems:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'justify'}}>SSC MAHA PACK | (Live Classes) </Text>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
                
                    <Text style={{fontSize:19,fontWeight:'bold',color:'green'}}>RS </Text>
                    <Text style={{fontWeight:'bold',fontSize:19,color:'red'}}>2000   </Text>

                    <Text>50% OFF</Text>
                </View>
                <MaterialCommunityIcons name="offer" size={38} color="red" ><Text style={{fontSize:14}}>   Offer available</Text></MaterialCommunityIcons>
            </View>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>  {console.log('pressed')}} >
            <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start',padding:20,height:180,backgroundColor:'#fff',marginBottom:12,borderBottomColor:'grey',borderBottomWidth:0.5}}>
            
            <View style={{height:140,width:140,
                backgroundColor:'red',borderRadius:10}}>
                <Text>THis is me</Text>
            </View>
            <View style={{marginHorizontal:20,flex:1,alignItems:'flex-start'}}>
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'justify'}}>SSC MAHA PACK | (Live Classes) </Text>

                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
                
                    <Text style={{fontSize:19,fontWeight:'bold',color:'green'}}>RS </Text>
                    <Text style={{fontWeight:'bold',fontSize:19,color:'red'}}>2000   </Text>

                    <Text>50% OFF</Text>
                </View>
                <MaterialCommunityIcons name="offer" size={38} color="red" ><Text style={{fontSize:14}}>   Offer available</Text></MaterialCommunityIcons>
            </View>
        </View>
    </TouchableOpacity>
</ScrollView>


    )
};

export default CourseListScreen;