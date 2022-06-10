import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {TransactionsCell} from './transactionsCell';
export const TransactionListView = () => {
  return (
    <View>
      <FlatList
        ListFooterComponent={() => <View style={{height: 50}} />}
        data={[
          {key: 'Android'},
          {key: 'iOS'},
          {key: 'Java'},
          {key: 'Swift'},
          {key: 'Php'},
        ]}
        renderItem={({item, index}) => (
          <TransactionsCell
            date={'25 jun 2022'}
            title={'Salary'}
            message={'salary whit bonus'}
            salary={'$500.00'}
          />
        )}
      />
    </View>
  );
};
