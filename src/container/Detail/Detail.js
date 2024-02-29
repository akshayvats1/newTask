import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../assets/css/CommonCss';

const Detail = () => {
  const handleDeepLink = link => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity
          onPress={() => handleDeepLink('https://woost.io/detail')}>
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>
              Detail (https://woost.io/detail)
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
