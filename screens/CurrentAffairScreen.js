import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';

const CurrentAffairScreen = () => {

    return(
        <ScrollView  style={{flex:1,padding:15,backgroundColor:'#fff'}} >
            <View style={{marginBottom:10}} >
               
                    <Text style={{color:'grey',fontSize:15}}>Saturday, 19 Dec 2020</Text>

<TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-start',height:120,width:'100%',borderBottomColor:'#B1A9A8',borderBottomWidth:1}}>
                    <View style={{height:100,width:120}}>
                    <Image source={{uri :'https://picsum.photos/seed/picsum/200/300'}} 
              style={{flex:1, width:null, height:null, resizeMode:'cover',borderRadius:15}} />
                    </View>
                    <View style={{flex:1,marginHorizontal:15,backgroundColor:'bllue'}}>
                        <Text style={{fontSize:15}} >The indian goverment has suspendend all international flight from india to britain and it seems that this is going to be the till next month.</Text>
                    </View> 
                </View>
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-start',height:120,width:'100%',borderBottomColor:'#B1A9A8',borderBottomWidth:1}}>
                    <View style={{height:100,width:120}}>
                    <Image source={{uri :'https://picsum.photos/seed/picsum/200/300'}} 
              style={{flex:1, width:null, height:null, resizeMode:'cover',borderRadius:15}} />
                    </View>
                    <View style={{flex:1,marginHorizontal:15,backgroundColor:'bllue'}}>
                        <Text style={{fontSize:15}} >The indian goverment has suspendend all international flight from india to britain and it seems that this is going to be the till next month.</Text>
                    </View> 
                </View>
 </TouchableOpacity>
            </View>

            <View style={{marginBottom:10}}>
               <Text style={{color:'grey',fontSize:15}}>Saturday, 19 Dec 2020</Text>
               <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',height:120,width:'100%',borderBottomColor:'#B1A9A8',borderBottomWidth:1}}>
                    <View style={{height:100,width:120,backgroundColor:'red',borderRadius:12}}>
                        <Text>Heydfsdfs</Text>
                    </View>
                    <View style={{flex:1,marginHorizontal:10,backgroundColor:'bllue'}}>
                        <Text>Jewerw</Text>
                    </View> 
                </View>

                
 </TouchableOpacity>

       </View>

        </ScrollView>
    )
};
export default CurrentAffairScreen;