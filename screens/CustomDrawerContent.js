import React from 'react';
import { Button, StyleSheet,TouchableHighlight,View,Text,Image, Alert } from 'react-native';
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomDrawerContent =  props => {

    return(

        <DrawerContentScrollView {...props}>
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <TouchableHighlight onPress={() => {}} style={styles.touch}>
                        <Image source={{ uri:'https://i.pravatar.cc/300'}} style={styles.img} resizeMode='cover' />
                    </TouchableHighlight>

                        <Text style={styles.txt}>Hey man!</Text>

                </View>
            </View>

            <DrawerItemList {...props} />
                 <DrawerItem label="Share"  icon={({ focused }) => <Ionicons color='red' size={25} name='md-share' />} onPress={() => {}} />
                <DrawerItem label="Current Affair" />
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
        width:80,
        overflow:'hidden',
         height:80,
          resizeMode:'cover',
          borderRadius:80/2,
        
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
        color:'white'
    }
})

export default CustomDrawerContent;