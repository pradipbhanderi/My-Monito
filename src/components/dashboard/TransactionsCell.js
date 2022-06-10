import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/colors';

export const TransactionsCell = ({date, title, message, salary}) => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.DateContainer}>
        <Text style={styles.txtDate}>{date}</Text>
      </View>

      <View style={styles.borderMain} />

      <View style={styles.container}>
        <View style={styles.border} />

        <View style={styles.inExpContainer}>
          <Text style={styles.txtSalary}>{title}</Text>
          <View style={styles.containerMessage}>
            <Text style={styles.txtMessage}>{message}</Text>
            <Text style={styles.txtValue}>{salary}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    borderColor: COLORS.grey1,
    borderWidth: 1.5,
    height: 120,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F2',
    borderStyle: 'solid',
  },
  DateContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 7,
  },
  txtDate: {
    fontSize: 12,
    color: 'grey',
    marginStart: 10,
  },
  borderMain: {
    height: 1.5,
    marginTop: 2,
    backgroundColor: COLORS.grey2,
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 70,
    marginTop: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  border: {
    height: 45,
    width: 6,
    marginTop: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  inExpContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginStart: 10,
    flex: 1,
  },
  txtSalary: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'black',
  },
  containerMessage: {
    flexDirection: 'row',
    marginTop: 2,
  },
  txtMessage: {
    fontSize: 12,
    textAlign: 'left',
    color: COLORS.grey2,
    flex: 1,
  },
  txtValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginEnd: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
});
