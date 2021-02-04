 import React from 'react';
import {ScrollView,View} from 'react-native';
import QuizListItem from '../components/QuizListItem';


const QuizHomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff'}}>
      <View style={{padding: 10}}>
        <QuizListItem iconName="book" CategoryName="Quantative Aptitude"/>
        <QuizListItem iconName="copy" CategoryName="English"/>
        <QuizListItem iconName="bookmark" CategoryName="History"/>
        <QuizListItem iconName="flask" CategoryName="General Science"/>
        <QuizListItem iconName="pie-chart" CategoryName="Economics"/>
        <QuizListItem iconName="codepen" CategoryName="Geography"/>
        <QuizListItem iconName="compass" CategoryName="Reasoning Ability"/>
        <QuizListItem iconName="crop" CategoryName="Full Length Tests"/>
        <QuizListItem iconName="coffee" CategoryName="Miscellaneous Quizzes"/>
        <QuizListItem iconName="feed" CategoryName="General Awareness"/>
       

      </View>
    </ScrollView>
  );
};


export default QuizHomeScreen;
