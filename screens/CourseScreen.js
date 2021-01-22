import React from 'react';
import {View,Text,ScrollView,Button,Image} from 'react-native';
const CourseScreen =  () => {
    return(
        <ScrollView style={{flex:1}}>
           <View style={{height:200,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
                <Text>This is image section</Text>
           </View>
           <Text style={{marginLeft:12,marginTop:12,fontWeight:'700',fontSize:20,}} >Python 2020 for Beginner</Text>
            

        <View style={{margin:20}}>
            <Button title='start the course' color='red' ></Button>
        </View>
        <View style={{marginLeft:20}} >
            <Text style={{color:'grey',fontSize:16}}>About Course</Text>
            <Text style={{marginTop:10}}>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</Text>

            <Text style={{marginTop:12,color:'grey',fontSize:16}} >What you will Learn</Text>

            {/* Bullet point section */}
            <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
            <Text>{'\u25CF'}</Text>
            <Text style={{marginHorizontal:10}}>This course is very usefulsdfsdfsdf sdfnsjdfnasjdfnasdjfsdf sfdnsdfsdfsdfjsdf</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
            <Text>{'\u25CF'}</Text>
            <Text style={{marginHorizontal:10}}>This course is very usefulsdfsdfsdf sdfnsjdfnasjdfnasdjfsdf sfdnsdfsdfsdfjsdf</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
            <Text>{'\u25CF'}</Text>
            <Text style={{marginHorizontal:10}}>This course is very usefulsdfsdfsdf sdfnsjdfnasjdfnasdjfsdf sfdnsdfsdfsdfjsdf</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:10}}>
            <Text>{'\u25CF'}</Text>
            <Text style={{marginHorizontal:10}}>This course is very usefulsdfsdfsdf sdfnsjdfnasjdfnasdjfsdf sfdnsdfsdfsdfjsdf</Text>
            </View>

        {/* FAQ section start here */}

        <View style={{marginTop:10,marginBottom:20}} >
            <Text style={{color:'grey',fontSize:16}} >Author</Text>
           
            
            <View style={{flexDirection:'row',margin:15,justifyContent:'flex-start'}}>
                <Image source={{uri :'https://i.pravatar.cc/300'}} style={{  width:80,
        overflow:'hidden',
         height:80,
          resizeMode:'cover',
          borderRadius:80/2,}} resizeMode='cover'  />
          <View style={{flex:1,marginLeft:15,marginRight:5}}>
                <Text style={{fontSize:17,fontWeight:'bold',color:'brown',textAlign:'justify'}}>Satyam Kumar</Text>
                <Text style={{textAlign:'justify'}}>I'm a teacher with alot of passion in the field of computer science and very well known professor of this decade.</Text>
          </View>
          

            </View>
           

        </View>
            
        </View>
    </ScrollView>
    )
};

export default CourseScreen;