
import React from "react";
import {View,ScrollView} from 'react-native';
import QuizItem from '../components/QuizItem';

const QuizScreen = () => {

    return(
        <ScrollView style={{flex:1,padding:10}}>
          
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
            <QuizItem/>
        </ScrollView>
    )

};

export default QuizScreen;