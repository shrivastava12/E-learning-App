import React, { useState,useLayoutEffect } from 'react';
import {View,Text,StyleSheet,Animated,ScrollView,Image, TouchableOpacity,Dimensions} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import HorizontalScroll from '../components/HorizontalScroll';
import { HeaderButtons,Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


const images =  [
  'https://i.ytimg.com/vi/_bP8Hal24IQ/maxresdefault.jpg',
 'https://i.ytimg.com/vi/AUeBpm_BMSA/maxresdefault.jpg',
 'https://i.ytimg.com/vi/mWOpHgeZjxc/maxresdefault.jpg'
 
]
    const HomeScreen = ({navigation}) => {
      
     useLayoutEffect(() => {
       navigation.setOptions({
         headerLeft:() => (
           <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
             <Item title="Menu" iconName='md-menu' onPress={() => {
               navigation.toggleDrawer()
             }} />
           </HeaderButtons>
         ),
         headerRight:() => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Men" iconName='md-notifications-circle' onPress={() => {
            navigation.navigate('notification')
          }} />
         </HeaderButtons>
         )
       })
     })


     const onHandlePress =  () => {
       console.log('onPress event');
     }

      return(
          <ScrollView style={styles.container}>
              <SliderBox images={images}  sliderBoxHeight={220} sliderBoxWidth={100}
  onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
  dotColor="black"
  inactiveDotColor="#90A4AE" />

        <View style={styles.categoryContainer}>
            <View style={styles.category} onPress={() => {console.log('click')}}>
              <TouchableOpacity onPress={
                () => {navigation.navigate('courseList')}
              } style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </TouchableOpacity>
              <Text>SSC</Text>
            </View>

            <View style={styles.category} onPress={() => {console.log('click')}}>
              <TouchableOpacity style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </TouchableOpacity>
              <Text>Railway</Text>
            </View>

            <View style={styles.category} onPress={() => {console.log('click')}}>
              <TouchableOpacity style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </TouchableOpacity>
              <Text>BankPO</Text>
            </View>
        </View>

        <View style={[styles.categoryContainer,{marginTop:0}]}>
            <View style={styles.category} onPress={() => {console.log('click')}}>
              <TouchableOpacity style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </TouchableOpacity>
              <Text>SSC</Text>
            </View>

            <View style={styles.category} onPress={() => {console.log('click')}}>
              <TouchableOpacity style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </TouchableOpacity>
              <Text>Railway</Text>
            </View>

            <View style={styles.category} onPress={() => {console.log('click')}}>
              <TouchableOpacity style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </TouchableOpacity>
              <Text>BankPO</Text>
            </View>
        </View>
        
        {/* Horizontal scroll view */}
        <View style={{flexDirection:'row',backgroundColor:'#fff',marginTop:10,padding:10,justifyContent:'space-between',alignItems:'center'}} >
          <View style={{alignSelf:'center',marginLeft:5}}>
            <Text style={{fontFamily:'serif'}}>
              Popular courses
            </Text>
          </View>
          <View style={{alignSelf:'center'}}>
            <Text style={{color:'grey'}}>
              View All
            </Text>
          </View>
        </View>
          <View style={{height:200,backgroundColor:'#fff'}}>
              <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>

                  
                <HorizontalScroll onHandlePress={onHandlePress}/>
                <HorizontalScroll/>
                  
                <HorizontalScroll/>

              </ScrollView>
          </View>
          
        {/* Horizontal scroll section end here */}

          {/* <View style={{marginTop:10,backgroundColor:'#fff',height:100,alignItems:'center',justifyContent:'center'}}>
            <View style={{height:80,backgroundColor:'grey',width:'80%'}}>
              <TouchableOpacity style={[styles.categoryIcon,{borderRadius:0,backgroundColor:'grey',}]}>
                 <Ionicons name="md-restaurant" size={35} color="#FF6347" />
                 <Text>Test series</Text>
              </TouchableOpacity>
              </View>
          </View> */}

     </ScrollView>
      )
    };

    const styles =  StyleSheet.create({
      container:{
        flex:1,
      },
      categoryContainer:{
        flexDirection:'row',
        justifyContent:'center',
        padding:20,
        alignSelf:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#fff',
        marginTop:10
      },
      category:{
        width:'30%',
        marginTop:10,
        alignItems:'center',
        alignSelf:'center',
     
        marginHorizontal:10,
      
      },
      categoryIcon:{
        height:70,
        alignItems:'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width:70,
        backgroundColor: '#fdeae7',
        borderRadius:50
      }

    })

    export default HomeScreen;