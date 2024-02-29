import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../assets/css/CommonCss';

const Home = () => {
  const handleDeepLink = link => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity
          onPress={() => handleDeepLink('https://woost.io/home')}>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Home (https://woost.io/home)</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
