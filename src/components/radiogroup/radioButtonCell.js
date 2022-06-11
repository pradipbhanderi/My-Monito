import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/colors';
import colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {Fonts} from '../../theme/fonts';
import {Images} from '../../assets/images';

export const RadioButtonCell = ({label, onRadiobuttonPress, isSelect}) => {
  let Color = 'white';
  return (
    <Pressable onPress={onRadiobuttonPress} style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.circleContainer}>
          {isSelect && (
            <Image style={[styles.fillImage]} source={Images.circle} />
          )}
        </View>
        <Text style={styles.txtLabel}> {label} </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  mainContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  circleContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.grey2,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
  },
  fillImage: {
    width: 15,
    height: 15,
    tintColor: COLORS.themeColor,
    alignSelf: 'center',
  },
  txtLabel: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    marginEnd: 20,
    color: 'black',
    marginStart: 2,
  },
});
