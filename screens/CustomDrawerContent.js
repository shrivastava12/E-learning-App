import React from 'react';
import { StyleSheet,TouchableHighlight,View,Text,Image } from 'react-native';
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Antidesign from 'react-native-vector-icons/AntDesign';

const CustomDrawerContent =  props => {

    return(

        <DrawerContentScrollView {...props}>
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <TouchableHighlight onPress={() => {
                        props.navigation.navigate('video')
                    }} style={styles.touch}>
                        <Image source={{ uri:'https://bel-india.com/wp-content/uploads/2019/02/Best-Looking-Indian-Girls1.jpg'}} style={styles.img} resizeMode='cover' />
                    </TouchableHighlight>

                        <Text style={styles.txt}>Hey man!</Text>

                </View>
            </View>

            <DrawerItemList {...props} />
                
                <DrawerItem style={{
                    marginLeft:20
                }} label="Current Affair" icon={() => <FontAwesome color="green" size={25} name="bookmark" />} onPress={() => {props.navigation.navigate('currentAffairs')}} />
                {/* <DrawerItem label="Video Player" onPress={() => {props.navigation.navigate('video')}} /> */}
                <DrawerItem style={{
                    marginLeft:20
                }}  label="Share"  icon={() =><Antidesign color="green" size={25} name="sharealt" />}  onPress={() => {
                        props.navigation.navigate('video')                    
                }} />
                <DrawerItem style={{
                    marginLeft:20
                }} label="Quiz" icon={() => <FontAwesome color="green" size={25} name="address-book-o" />}  onPress={() => {
                    props.navigation.navigate('quiz')
                }} />

                <DrawerItem label="test" onPress={() => {
                    props.navigation.navigate('video')
                }} />
               
        </DrawerContentScrollView>

    )

};

const styles =  StyleSheet.create({

    container:{
        height:140,
        justifyContent:'center',backgroundColor:'#ff0000',
        alignItems:'center'
    },
    img:{
        width:100,
        overflow:'hidden',
         height:100,
          resizeMode:'cover',
          borderRadius:100/2,
        
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
        color:'white'
    }
});

export default CustomDrawerContent;