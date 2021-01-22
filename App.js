import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './store';
import NavigationStack from './screens/NavigationStack';


const App =  () =>  {

  return (
    <Provider store={store}>
      <NavigationContainer> 
       <NavigationStack/>      
      </NavigationContainer>
    </Provider>
  );
};

export default App;