import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

export const BottomSheet = ({icon, categoriesName}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.containerTransaction}>
        <Image style={styles.imageTransaction} source={icon} />
        <Text style={styles.txtTransaction}>{categoriesName}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerTransaction: {
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 30,
    flexDirection: 'row',
  },
  imageTransaction: {
    width: 20,
    height: 20,
    tintColor: 'black',
    marginStart: 15,
  },
  txtTransaction: {
    fontSize: 12,
    marginStart: 10,
    color: 'black',
    fontFamily: Fonts.bold,
  },
});
