import React,{useState} from "react";
import {View,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const QuizScreen = () => {

    const qBank = [

        {
            question:"How build the app",
            answers:["vinayak","sarthak","somile","devesh"],
            correct:"vinayak",
            questionId:"1"
        },

        {
            question:"How build the app?",
            answers:["vinayak","sarthak","somil","devesh"],
            correct:"vinayak",
            questionId:"2"
        },

        {
            question:"How to build the app",
            answers:["vinayak","sarthak","somil","devesh"],
            correct:"sarthak",
            questionId:"3"
        }

    ]


    


    return(

        <View style={{}}>
           <FontAwesome name="bookmark" size={23} color="red"/>
        </View>

    )

};

export default QuizScreen;