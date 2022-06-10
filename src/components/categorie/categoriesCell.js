import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/colors';

export const CategoriesCell = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.borderMain} />

      <View style={styles.container}>
        <View style={styles.border} />
        <Text style={styles.txtSalary}>salary</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.grey1,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  container: {
    borderRadius: 10,
    backgroundColor: COLORS.grey3,
    height: 50,
    flexDirection: 'row',
  },
  border: {
    height: 35,
    width: 6,
    marginTop: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  txtSalary: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginStart: 10,
    color: 'black',
  },
});
