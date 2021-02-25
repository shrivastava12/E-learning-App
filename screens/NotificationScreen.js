import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import ListView from '../components/ListView';


const NotificationsScreen = () => {
    
    return(
       <ScrollView style={{flex:1}}>
          
            <ListView/>
            <ListView/>
            <ListView/>
            <ListView/>
            <ListView/>
            <ListView/>
       </ScrollView>

       
    )
};

export default NotificationsScreen;