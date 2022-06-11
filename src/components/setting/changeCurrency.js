import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Images} from '../../assets/images';
import {BottomSheet} from '../dashboard/bottomsheet';
import {COLORS} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {RadioGroup} from '../radiogroup/radioGroup';
export const ChangeCurrency = () => {
  const Symbol = [
    {
      key: '1',
      label: 'left side',
    },
    {
      key: '2',
      label: 'right side',
    },
  ];
  const Decimal = [
    {
      key: '1',
      label: 'Dot',
    },
    {
      key: '2',
      label: 'Comma',
    },
  ];
  const Thousand = [
    {
      key: '1',
      label: 'Dot',
    },
    {
      key: '2',
      label: 'Comma',
    },
    {
      key: '3',
      label: 'Space',
    },
  ];
  return (
    <View>
      <View style={styles.modelContainerHeader}>
        <Text style={styles.txtHeader}> Preview</Text>
        <Text style={styles.txtValue}>$ 10000.00 </Text>
      </View>
      <View style={styles.inputTextContainer}>
        <TextInput style={styles.inputText} placeholder={'$'} />
      </View>
      <Text style={styles.txtSymbol}> Show Symbol On</Text>
      <View style={styles.containerSymbol}>
        <RadioGroup options={Symbol} />
      </View>
      <Text style={styles.txtDecimal}> Decimal Separator</Text>
      <View style={styles.containerSymbol}>
        <RadioGroup options={Decimal} />
      </View>
      <Text style={styles.txtDecimal}> Thousand Separator</Text>
      <View style={styles.containerSymbol}>
        <RadioGroup options={Thousand} />
      </View>
      <View style={styles.containerButton}>
        <Text style={styles.txtReset}> Reset </Text>
        <Text style={styles.txtCancel}> Cancel </Text>
        <View style={styles.containerOkay}>
          <Text style={styles.txtOkay}> OKay </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modelContainerHeader: {
    height: 80,
    flexDirection: 'column',
    backgroundColor: COLORS.themeColor,
  },
  txtHeader: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    marginTop: 8,
  },
  txtValue: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
  },
  inputTextContainer: {
    borderColor: COLORS.grey1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 10,
  },
  inputText: {
    paddingStart: 10,
  },
  txtSymbol: {
    fontSize: 12,
    color: COLORS.themeColor,
    marginStart: 10,
    marginTop: 10,
  },
  containerSymbol: {
    marginTop: 5,
    marginStart: 10,
  },
  txtDecimal: {
    fontSize: 12,
    color: COLORS.themeColor,
    marginStart: 10,
    marginTop: 15,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  txtReset: {
    fontFamily: Fonts.bold,
    color: COLORS.grey2,
    flex: 1,
    marginTop: 10,
    marginStart: 10,
  },
  txtCancel: {
    fontFamily: Fonts.bold,
    color: COLORS.grey2,
    flex: 1,
    marginTop: 10,
    textAlign: 'center',
    marginEnd: 10,
  },
  containerOkay: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginEnd: 10,
    justifyContent: 'center',
    height: 40,
  },
  txtOkay: {
    fontFamily: Fonts.bold,
    color: 'white',
  },
});
