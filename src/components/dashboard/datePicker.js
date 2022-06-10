import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import {COLORS} from '../../theme/colors';
export const DatePicker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textDate}>Oct 2010</Text>
      <Image source={Images.down} style={styles.Image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  textDate: {
    textAlign: 'right',
    fontSize: 12,
    color: 'black',
  },
  Image: {
    width: 15,
    height: 15,
    marginTop: 3,
    tintColor: COLORS.themeColor,
    marginStart: 5,
  },
});
