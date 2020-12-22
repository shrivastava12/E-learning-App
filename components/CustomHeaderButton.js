import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton =  props => {
    return <HeaderButton color="black" iconSize={34} {...props} 
    IconComponent={Ionicons} />
};

export default CustomHeaderButton;
