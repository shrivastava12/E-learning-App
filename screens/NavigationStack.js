import React,{useEffect} from 'react';
import {Platform} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CourseListScreen from './CourseListScreen';
import CoursePlayScreen from './CoursePlayScreen';
import CourseScreen from './CourseScreen';
import CurrentAffairScreen from './CurrentAffairScreen';
import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NotificationsScreen from './NotificationScreen';
import { connect } from 'react-redux';
import { getAuthToken } from '../actions/authAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuizScreen from './QuizScreen';

import SplashScreen from 'react-native-splash-screen'
import QuizHomeScreen from './QuizHomeScreen';
import QuestionScreen from './QuestionScreen';

const NavigationStack =  ({isAuthenticated,user,token,getAuthToken,isLoading}) => {


 
useEffect(() => {
  getAuthToken();

},[isAuthenticated,getAuthToken])



setTimeout(() => {
  SplashScreen.hide();
},2000)
  

  
    const Stack =  createStackNavigator();

    function MyHomeStack(){
     
      return(
        <Stack.Navigator>
            {/* <Stack.Screen name="login" component={LoginScreen} /> */}
    
    
        {/* <Stack.Screen name="login" options={{
          headerShown:false
        }} component={LoginScreen} /> */}
        <Stack.Screen name="Home" options={{
            headerTitle:'Adda 24*7',
            headerTitleAlign:'center',
           
        }} component={HomeScreen} />
    
        <Stack.Screen options={{
          headerTitle:'Notification'
        }} name="notification" component={NotificationsScreen} />
    
        <Stack.Screen options={{
          headerTitle:'',
          headerShown:true,
          headerTransparent:true,
         
        }} name="course" component={CourseScreen} />
    
        <Stack.Screen options={{
          headerTitle:'Current Affair',      
        }} name="currentAffairs" component={CurrentAffairScreen} />
    
        <Stack.Screen options={{
          headerTitle:'Course List',
    
        }} name="courseList" component={CourseListScreen} />
    
      <Stack.Screen options={{
        headerShown:false 
      }} name='video' component={CoursePlayScreen
      } />


      <Stack.Screen options={{
        headerShown:true,
        headerTitle:'Quizzes'
      }} name='quiz' component={QuizHomeScreen} />
    
      <Stack.Screen options={{
        headerTitle:'Quize screen'
      }} name='quizList' component={QuizScreen} />

      <Stack.Screen options={{
        headerTitle:'Question screen',
        headerShown:false
      }} name="question" component={QuestionScreen} />

      </Stack.Navigator>
      )
    }

    const StartStack =  createStackNavigator();

function MyStartStack() {
  return(
    <StartStack.Navigator>
      <StartStack.Screen options={{
        headerShown:false
      }} name="login" component={LoginScreen}  />
    </StartStack.Navigator>
  )
}



const Drawer = createDrawerNavigator();


return(

    <> 
    {
        isAuthenticated ? (
            <Drawer.Navigator drawerContentOptions={{
              activeTintColor: 'red',
              itemStyle:{
                backgroundColor:'#F5F5F5',
                marginLeft:20,
                
              }
            }} overlayColor="transparent" screenOptions={
              ({route}) => ({
                  drawerIcon:() =>{
                    let iconName;
                    if(route.name === 'Home'){
                      iconName =  Platform.OS === 'android' ? 'md-list' :'ios-list'
                    }
                    return <Ionicons name={iconName} size={23} color='red' />
                  }
              })
            } drawerStyle={{
              backgroundColor:'#F5F5F5',
           
           
              
            }}  drawerContent={props => <CustomDrawerContent {...props} />  } initialRouteName="Home">
            <Drawer.Screen  options={{
            drawerLabel:'Home',

            
            }}  name="Home"   component={MyHomeStack} />

           

          </Drawer.Navigator>
        ) : <MyStartStack/>
    }
    </>

)





};
const mapStateToProps =  state => ({
    isAuthenticated : state.auth.isAuthenticated,
    user:state.auth.user,
    token:state.auth.token,
    isLoading:state.auth.isLoading,
})

export default  connect(mapStateToProps,{getAuthToken})( NavigationStack);