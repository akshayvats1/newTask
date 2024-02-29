import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../assets/css/CommonCss';

const Profile = () => {
  const handleDeepLink = link => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity
          onPress={() => handleDeepLink('https://woost.io/profile')}>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>
              Profile (https://woost.io/profile)
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
