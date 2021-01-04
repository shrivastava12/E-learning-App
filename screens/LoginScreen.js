import React from 'react';
import {View,Text, Button} from 'react-native';

const LoginScreen =  (props) => {
    return(
        <View>
            <Text>This is login Screen</Text>
            <Button title="Go to home page" onPress={() => {props.navigation.navigate('Home')}}/>
        </View>
    )
};
export default LoginScreen;
