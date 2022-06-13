import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import {Images} from '../assets/images';
import colors from 'react-native/Libraries/NewAppScreen/components/Colors';

export const Profile = () => {
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      {/*profileDialog*/}
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={Images.model} />
        <View style={styles.containerNameEmail}>
          <Text style={styles.txtName}>John </Text>
          <Text style={styles.txtName}>Doe</Text>
          <Text style={styles.txtEmail}>johndoe@gmail.com</Text>
        </View>
        <View style={styles.containerEditIcon}>
          <Image style={styles.editPan} source={Images.editPan} />
        </View>
      </View>

      <View style={styles.containerBalance}>
        <Text style={styles.txtBalance}>Total Balance: </Text>
        <Text style={styles.txtValue}> $63.00</Text>
      </View>
      <View style={styles.chartContainer}>
        <Text> Chart </Text>
      </View>
      <View style={styles.Container}>
        <View style={styles.expenseContainer} />
        <Text style={styles.txtExpense}>Expense</Text>
        <View style={styles.incomeContainer} />
        <Text style={styles.txtIncome}>Income</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
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
  profileContainer: {
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
    borderColor: COLORS.grey1,
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 10,
    marginStart: 10,
    borderRadius: 30,
  },
  containerNameEmail: {
    flexDirection: 'column',
    flex: 1,
    marginStart: 10,
    marginTop: 10,
  },
  txtName: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  txtEmail: {
    fontSize: 12,
    color: COLORS.grey2,
    fontWeight: 'normal',
    marginBottom: 20,
  },
  containerEditIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.yellow,
    marginTop: 5,
    marginEnd: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editPan: {
    height: 17,
    width: 17,
  },
  containerBalance: {
    flexDirection: 'row',
    marginTop: 40,
    marginStart: 15,
  },
  txtBalance: {
    fontFamily: Fonts.semiBold,
    color: 'black',
    fontSize: 12,
  },
  txtValue: {
    fontFamily: Fonts.semiBold,
    color: 'green',
    fontSize: 12,
  },
  chartContainer: {
    marginTop: 20,
  },
  Container: {
    flexDirection: 'row',
    marginTop: 10,
    marginStart: 15,
  },
  expenseContainer: {
    width: 15,
    height: 15,
    marginTop: 2,
    backgroundColor: COLORS.themeColor,
  },
  txtExpense: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: 'black',
    marginStart: 5,
  },
  incomeContainer: {
    width: 15,
    height: 15,
    marginTop: 2,
    marginStart: 10,
    backgroundColor: COLORS.green,
  },
  txtIncome: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: 'black',
    marginStart: 5,
  },
});
