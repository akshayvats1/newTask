import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../container/Home/Home';
import Icon from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from '../container/Detail/Detail';
import Profile from '../container/Profile/Profile';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View style={tabInfo.focused ? styles.bottomTab : ''}>
                {tabInfo.focused ? (
                  <Icon color={'#183761'} name="home" size={22} />
                ) : (
                  <Octicons color={'#7487A0'} name="home" size={20} />
                )}
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Bottom.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View style={tabInfo.focused ? styles.bottomTab : ''}>
                <MaterialCommunityIcons
                  color={tabInfo.focused ? '#183761' : '#7487A0'}
                  name="details"
                  size={20}
                />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <View style={tabInfo.focused ? styles.bottomTab : ''}>
                <FontAwesome
                  color={tabInfo.focused ? '#183761' : '#7487A0'}
                  name="user"
                  size={20}
                />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
    </Bottom.Navigator>
  );
};
const styles = StyleSheet.create({
  bottomTab: {
    borderRadius: 20,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8DFE3',
    height: '100%',
  },
});

export default BottomNavigator;
