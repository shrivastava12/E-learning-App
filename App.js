import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator ,DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawerContent from './screens/CustomDrawerContent';
import CourseScreen from './screens/CourseScreen';
import CurrentAffairScreen from './screens/CurrentAffairScreen';



const Stack =  createStackNavigator();

function MyHomeStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Home" options={{
        headerTitle:'Adda 24*7',
        headerTitleAlign:'center'
    }} component={HomeScreen} />

    <Stack.Screen options={{
      headerTitle:'Notification'
    }} name="notification" component={NotificationsScreen} />

    <Stack.Screen options={{
      headerTitle:'Course'
    }} name="course" component={CourseScreen} />

  </Stack.Navigator>
  )
}


// const CurrentAffairStack =  createStackNavigator();
// function  MyCurrentAffairStack(){

//     return(
//       <CurrentAffairStack.Navigator>
//         <CurrentAffairStack.Screen name="currentAffair" component={CurrentAffairScreen} />
//       </CurrentAffairStack.Navigator>
//     )

// }


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />  } initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyHomeStack} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}