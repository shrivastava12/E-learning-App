import React,{useState} from 'react';
import {View,Text,TouchableOpacity,TextInput,Platform,StyleSheet,StatusBar,Alert, TouchableOpacityBase} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { login } from '../actions/authAction';


const LoginScreen =  ({login,isAuthenticated}) => {


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [data,setData] = useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        isValidUser:true,
        isValidPassword:true,
    })


    const textInputChage = (val) =>  {
        // if(val.trim().length >=4){
        //     setData({
        //         ...data,
        //         email:val,
        //         check_textInputChange:true,
        //         isValidUser:true
        //     });
        // }else{
        //     setData({
        //         ...data,
        //         email:val,
        //         check_textInputChange:false,
        //         isValidUser:false
        //     });
        // }

        // console.log('data',data)
        setEmail(val);
    }

    const handlePasswordChange =  (val) => {
        // if(val.trim().length >= 5){
        //     setData({
        //         ...data,
        //         password:val,
        //         isValidPassword:true
        //     });
        // }else{
        //     setData({
        //         ...data,
        //         password:val,
        //         isValidPassword:false
        //     });
        // }
        setPassword(val);
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        });
    }

    const loginHandle =  (email,password) => {
        // if(data.email.length === 0 || data.password.length === 0){
        //     Alert.alert('Wrong Input!','email or Password field cannot be empty.',[
        //         {text:'Okay'}
        //     ]);
        //     return;
        // } 
       login(email,password)
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome !</Text>
            </View>


            <Animatable.View animation='fadeInUpBig' style={[
                styles.footer,{backgroundColor:'white'}
            ]} >
                
              
                
                <View style={styles.action}>
                    <FontAweasome name='user-o' color='green' size={20} />
                    <TextInput placeholder=" Your email" placeholderTextColor='#666666'  style={[
                        styles.textInput
                    ],{color:'red'}} autoCapitalize="none" onChangeText={(val) => {
                        textInputChage(val)
                    }} onEndEditing={(e) => {console.log(e.nativeEvent.text)}} />

                    {/* {data.check_textInputChange ? <Animatable.View animation='bounceIn' >
                        <Feather  name="check-circle" color="green" size={20} />
                    </Animatable.View> : null} */}

                </View>

                    {/* {
                        data.isValidUser ? null : <Animatable.View animation="fadeInLeft" duration={500} >
                            <Text style={styles.errorMsg}>email must be four character</Text>
                        </Animatable.View>
                    } */}

                   
                    <View style={styles.action}>
                        <Feather name='lock' color='green' size={22} />
                        <TextInput placeholder='Your password' placeholderTextColor='#666666' secureTextEntry={data.secureTextEntry ? true : false} style={[
                            styles.textInput,{color:'red'}
                        ]} autoCapitalize='none' onChangeText={(val) => handlePasswordChange(val)} />
                    
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {/* {
                            data.secureTextEntry ? <Feather name='eye-off' color='grey' size={20} /> : <Feather name='eye' color='grey' size={20} />
                        } */}

                    </TouchableOpacity>

                    </View>

                    {/* {
                        data.isValidPassword ? null : <Animatable.View animation='fadeInLeft' duration={500} >
                            <Text style={styles.errorMsg} >Password must be 8 character</Text>
                        </Animatable.View>
                        

                    } */}
                    <TouchableOpacity>
                        <Text style={{color:'#009387',marginTop:15}} >Forgot password?</Text>
                    </TouchableOpacity>

                   
                   
                        <TouchableOpacity onPress={() => {loginHandle(email,password)}} >
                            <LinearGradient style={styles.button}  colors={['#FF4331','#D31A50']} >
                                <Text style={styles.textSign} >Sign in</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    

            </Animatable.View>

        </View>
    )
};

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E21717'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:5,
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:90,
        paddingHorizontal:40,
        paddingVertical:30
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:40,
        borderBottomWidth:1,
        paddingBottom:5,
        justifyContent:'flex-start',
        alignItems:'center'
    },

    textInput:{
        
        marginTop:Platform.OS === 'ios' ? 0:-12,
        paddingLeft:10,
        color:'#05375a',
        flex:1
    },
    errorMsg:{
        color:'#FF0000',
        fontSize:14
    },
    button:{
        height:50,borderRadius:50,justifyContent:'center',alignItems:'center',marginTop:40
    },
    siginIn:{
      width:'100%'
     
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    }
});

const mapStateToProps =  state => ({
    isAuthenticated:state.auth.isAuthenticated,
})


export default connect(mapStateToProps,{login})(LoginScreen);




