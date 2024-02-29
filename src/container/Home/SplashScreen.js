import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../assets/css/CommonCss';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 1500);
  }, []);
  return (
    <View style={styles.main}>
      <Image
        style={{width: 350, height: 350}}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
