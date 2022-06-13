import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import {Images} from '../assets/images';

export const UpdateTransaction = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.headerText}> Update Transaction</Text>
        </View>
        <View style={styles.containerMain}>
          <View style={styles.containerSalary}>
            <Image style={styles.imageEmoji} source={Images.emoji} />
            <Text style={styles.txtSalary}> Salary</Text>
          </View>
          <View style={styles.containerDate}>
            <Image style={styles.imageCalender} source={Images.calendar} />
            <Text style={styles.txtDate}> Date:</Text>
            <Text style={styles.txtDateValue}> 30 Oct,2011</Text>
          </View>
          <View style={styles.containerAmount}>
            <Image style={styles.imageCalender} source={Images.dollar} />
            <Text style={styles.txtAmount}> 300.00</Text>
          </View>
          <View style={styles.containerMessages}>
            <Text style={styles.txtMessages}>Salary with bonus</Text>
          </View>
          <View style={styles.containerPhoto}>
            <Text style={styles.txtPhoto}>Salary with bonus</Text>
            <View style={styles.containerCamera}>
              <Image style={styles.imageCamera} source={Images.camera} />
            </View>
          </View>
          <View style={styles.containerButton}>
            <Text style={styles.txtButton}>Update Transaction</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginBottom: 50,
  },
  containerHeader: {
    marginStart: 15,
    flexDirection: 'row',
    marginEnd: 10,
    marginTop: 15,
  },
  headerText: {
    textAlign: 'left',
    flex: 1,
    fontFamily: Fonts.medium,
    color: COLORS.themeColor,
    fontSize: 18,
  },
  containerMain: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.grey1,
    flexDirection: 'column',
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  containerSalary: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    flexDirection: 'row',
  },
  imageEmoji: {
    height: 25,
    width: 25,
    marginStart: 10,
    tintColor: COLORS.dark_green,
  },
  txtSalary: {
    marginStart: 5,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    alignSelf: 'center',
    color: COLORS.black,
  },
  containerDate: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    flexDirection: 'row',
  },
  imageCalender: {
    height: 25,
    width: 25,
    marginStart: 10,
    tintColor: COLORS.grey2,
  },
  txtDate: {
    marginStart: 5,
    fontFamily: Fonts.regular,
    fontSize: 12,
    alignSelf: 'center',
    color: COLORS.black,
  },
  txtDateValue: {
    marginStart: 5,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    alignSelf: 'center',
    color: COLORS.black,
  },
  containerAmount: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    flexDirection: 'row',
  },
  txtAmount: {
    marginStart: 5,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    alignSelf: 'center',
    color: COLORS.black,
  },
  containerMessages: {
    borderRadius: 3,
    height: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 30,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    flexDirection: 'row',
  },
  txtMessages: {
    marginStart: 10,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    marginTop: 10,
    color: COLORS.black,
  },
  containerPhoto: {
    borderRadius: 3,
    height: 130,
    marginTop: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  txtPhoto: {
    marginStart: 10,
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    marginTop: 10,
    justifyContent: 'center',
    color: COLORS.grey2,
  },
  containerCamera: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -15,
    backgroundColor: COLORS.yellow,
  },
  imageCamera: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  containerButton: {
    borderRadius: 2,
    height: 40,
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
  },
  txtButton: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: COLORS.white,
  },
});
