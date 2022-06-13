import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../theme/colors';
import {Fonts} from '../theme/fonts';
import {Images} from '../assets/images';
import {useNavigation} from '@react-navigation/native';
import {ChangeCurrency} from '../components/setting/changeCurrency';

export const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      {/*for language */}
      <View style={styles.mainContainerLanguage}>
        <Image style={styles.imageTranslate} source={Images.translate} />
        <View style={styles.containerLanguage}>
          <Text style={styles.txtLanguage}>Change Language</Text>
        </View>
      </View>
      {/*for currency*/}
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.mainContainerLanguage}>
          <Image style={styles.dollarImage} source={Images.dollar} />
          <View style={styles.containerLanguage}>
            <Text style={styles.txtLanguage}>Change Currency</Text>
            <Text style={styles.txtValue}>$ 1,0000.00</Text>
          </View>
        </View>
      </Pressable>
      {/*for remind*/}
      <View style={styles.MainContainerRemind}>
        <View style={styles.containerMain}>
          <Image style={styles.remindImage} source={Images.alarm} />
          <View style={styles.containerRemind}>
            <Text style={styles.txtRemind}>Remind me</Text>
            <Text style={styles.txtRemindMes}>
              You'll reminded to add daily expenses
            </Text>
          </View>
          <View style={styles.container}>
            <Switch
              style={{marginTop: 10}}
              trackColor={COLORS.themeColor}
              thumbColor={'white'}
              ios_backgroundColor={COLORS.themeColor}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Text style={styles.txtMessage}>
          You'll get notification around 10:30Am
        </Text>
      </View>
      {/*for logout*/}
      <View style={styles.containerLogout}>
        <Image style={styles.imageLogout} source={Images.logout} />
        <Text style={styles.txtLogout}>Logout</Text>
      </View>
      {/*for model change currency*/}
      <Modal animationType={'fade'} visible={modalVisible} transparent={true}>
        <View style={styles.modalMainContainer}>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={{flex: 0.4, backgroundColor: '#00000000'}}
          />
          <View style={styles.modelSecondPart}>
            <ChangeCurrency />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  mainContainerLanguage: {
    borderStyle: 'solid',
    borderWidth: 1,
    height: 80,
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageTranslate: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginStart: 10,
  },
  containerLanguage: {
    flexDirection: 'column',
    marginTop: 20,
    marginStart: 10,
  },
  txtLanguage: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: 'black',
  },
  dollarImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    tintColor: COLORS.themeColor,
    marginStart: 10,
  },
  txtValue: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: 'black',
  },
  MainContainerRemind: {
    borderStyle: 'solid',
    borderWidth: 1,
    height: 100,
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    borderRadius: 10,
    flexDirection: 'column',
  },
  remindImage: {
    width: 20,
    height: 20,
    marginTop: 20,
    tintColor: COLORS.themeColor,
    marginStart: 10,
  },
  containerRemind: {
    flexDirection: 'column',
    marginTop: 10,
    marginStart: 15,
  },
  txtRemind: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: 'black',
  },
  txtRemindMes: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    marginTop: 5,
    color: COLORS.grey2,
  },
  containerMain: {
    flexDirection: 'row',
  },
  txtMessage: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: Fonts.semiBold,
    marginStart: 10,
    color: 'black',
  },
  containerLogout: {
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: COLORS.grey1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageLogout: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    tintColor: COLORS.grey2,
    marginStart: 10,
  },
  txtLogout: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    alignSelf: 'center',
    marginStart: 10,
    color: 'black',
  },
  modalMainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modelFirstPart: {
    flex: 0.4,
  },
  modelSecondPart: {
    flex: 0.6,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});
