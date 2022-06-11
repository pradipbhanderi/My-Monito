import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DatePicker} from '../components/dashboard/datePicker';
import {Income} from '../components/dashboard/income';
import {TransactionsCell} from '../components/dashboard/transactionsCell';
import {COLORS} from '../theme/colors';
import {TransactionListView} from '../components/dashboard/transactionListView';
import {BottomSheetMenu} from '../components/dashboard/bottomSheetMenu';
import {Images} from '../assets/images';
import {RadioGroup} from '../components/radiogroup/radioGroup';

const radioButtonArray = [
  {
    key: '1',
    label: 'left side',
  },
  {
    key: '2',
    label: 'right side',
  },
  {
    key: '3',
    label: 'top',
  },
  {
    key: '4',
    label: 'bottom',
  },
];

export const DashBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textTransactions}>Transactions</Text>
        <DatePicker />
      </View>
      <Income />
      <View style={styles.border} />
      <View style={styles.container}>
        <TransactionListView />
        {/*<RadioGroup options={radioButtonArray} />*/}
      </View>
      <BottomSheetMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerHeader: {
    marginStart: 10,
    flexDirection: 'row',
    marginEnd: 10,
    marginTop: 15,
  },
  textTransactions: {
    textAlign: 'left',
    flex: 1,
    color: COLORS.themeColor,
    fontSize: 15,
  },
  border: {
    height: 1,
    marginTop: 10,
    backgroundColor: COLORS.grey1,
  },
});
