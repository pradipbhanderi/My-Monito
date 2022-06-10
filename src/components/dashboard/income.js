import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import {IncomeCell} from './incomeCell';

export const Income = () => {
  const Space = <View style={{width: 12}} />;
  const balanceColor = <View style={{}} />;

  return (
    <View style={styles.container}>
      <IncomeCell icon={Images.plus} label={'Income'} income={'$300.00'} />
      {Space}
      <IncomeCell icon={Images.minus} label={'Expense'} income={'$200.00'} />
      {Space}
      {balanceColor}
      <IncomeCell
        icon={Images.balance}
        label={'Balance'}
        income={'$65.00'}
        valueColor={'green'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 25,
  },
});
