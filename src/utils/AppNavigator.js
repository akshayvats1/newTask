import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from '../container/Home/Home';
import Detail from '../container/Detail/Detail';
import Profile from '../container/Profile/Profile';
import SplashScreen from '../container/Home/SplashScreen';
import Parent from './Parent';
import linking from '../container/Home/Linking';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
