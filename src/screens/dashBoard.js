import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DatePicker} from '../components/dashboard/DatePicker';
import {Income} from '../components/dashboard/Income';
import {TransactionsCell} from '../components/dashboard/TransactionsCell';
import {COLORS} from '../theme/colors';
import {TransactionListView} from '../components/dashboard/TransactionListView';
import {BottomNavigation} from '../components/dashboard/bottomNavigation';
import {Images} from '../assets/images';

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
      </View>

      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
