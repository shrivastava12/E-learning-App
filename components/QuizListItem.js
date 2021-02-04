import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import Antidesign from 'react-native-vector-icons/AntDesign';

const QuizListItem =  ({iconName,CategoryName}) => {

    return(
<>
        <View
        style={styles.row}>
        <View
          style={styles.iconWrapper}>
          <FontAweasome name={iconName} size={23} color="black" />
        </View>
        <Text
          style={styles.text}>
         {CategoryName}
        </Text>

        <Antidesign
          style={{alignSelf: 'center'}}
          name="right"
          size={18}
          color="black"
        />
      </View>


</>

    )
};

const styles =  StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 70,
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    iconWrapper:{
        height: 40,
        width: 40,
        backgroundColor: '#CAD5E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'center',
    },
    text:{
        alignSelf: 'center',
        marginLeft: 16,
        fontFamily: 'arial',
        fontSize: 16,
        fontWeight: '100',
        flex: 1,
    }
});

export default QuizListItem;