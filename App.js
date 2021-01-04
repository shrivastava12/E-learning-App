import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { createDrawerNavigator ,DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawerContent from './screens/CustomDrawerContent';
import CourseScreen from './screens/CourseScreen';
import CurrentAffairScreen from './screens/CurrentAffairScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import CoursePlayScreen from './screens/CoursePlayScreen';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Alert } from 'react-native';
import { create } from 'react-test-renderer';
import CourseListScreen from './screens/CourseListScreen';
import LoginScreen from './screens/LoginScreen';



const Stack =  createStackNavigator();

function MyHomeStack(){
 
  return(
    <Stack.Navigator>
        {/* <Stack.Screen name="login" component={LoginScreen} /> */}
    <Stack.Screen name="Home" options={{
        headerTitle:'Adda 24*7',
        headerTitleAlign:'center'
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

 
  </Stack.Navigator>
  )
}

const StartStack =  createStackNavigator();

function MyStartStack() {
  return(
    <StartStack.Navigator>
      <StartStack.Screen name="login" component={LoginScreen}  />
    </StartStack.Navigator>
  )
}




const Drawer = createDrawerNavigator();

export default function App() {


  
// const [isAuthenticated,setIsAuthenticated] = useState(false);


// useEffect(() => { 
//   setTimeout(() => {
//     setIsAuthenticated(true)
//   },5000)
// },[isAuthenticated])

  return (
    <NavigationContainer>
     
          <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />  } initialRouteName="Home">
          <Drawer.Screen name="Home" component={MyHomeStack} />
        </Drawer.Navigator>
        
     
    </NavigationContainer>
  );
}