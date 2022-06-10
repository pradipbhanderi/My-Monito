import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import { COLORS } from "../../theme/colors";

export const IncomeCell = ({icon, label, income, valueColor = 'black'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Image source={icon} style={styles.imgIcon} />
        <Text style={styles.txtIncomeLabel}>{label}</Text>
      </View>
      <View>
        <Text style={[styles.txtIncome, {color: valueColor}]}> {income}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLabel: {
    flexDirection: 'row',
  },
  container: {
    borderColor: COLORS.grey1,
    flex: 1,
    borderWidth: 1,
    height: 80,
    borderRadius: 10,
    borderStyle: 'solid',
  },
  imgIcon: {
    width: 15,
    height: 15,
    marginTop: 12,
    marginStart: 5,
  },
  txtIncomeLabel: {
    marginStart: 5,
    marginTop: 10,
    fontSize: 12,
  },
  txtIncome: {
    marginStart: 16,
    marginTop: 6,
    fontSize: 12,
  },
});
