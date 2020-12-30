import React from 'react';
import {View,Text,Button} from 'react-native';
const CourseScreen =  () => {
    return(
        <View style={{flex:1}}>
           <View style={{height:200,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
                <Text>This is image section</Text>
           </View>
           <Text style={{marginLeft:12,marginTop:12,fontSize:20,}} >Course Title here</Text>
            <Text>$200</Text>

        <View style={{margin:20}}>
            <Button title="Buy Now" color='red' />
        </View>
        <View>
            <Text>About Course</Text>
        </View>
    </View>
    )
};

export default CourseScreen;