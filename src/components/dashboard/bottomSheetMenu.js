import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/colors';
import {Images} from '../../assets/images';
import {BottomSheet} from './bottomsheet';
import {Fonts} from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';

export const BottomSheetMenu = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomNavigation} />
      </View>
      <View style={styles.button}>
        <Image
          style={styles.bottomNavigationImage}
          source={Images.plus_white}
        />
      </View>
      <View style={styles.containerMenuImage}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image style={styles.menuButton} source={Images.menu} />
        </Pressable>
        <Image style={styles.searchButton} source={Images.search} />
      </View>
      {/*for Bottom Sheet model*/}
      <Modal animationType={'fade'} visible={modalVisible} transparent={true}>
        <View style={styles.modalMainContainer}>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={{flex: 0.5, backgroundColor: '#00000000'}}
          />
          {/*for menu list*/}
          <View style={styles.modelContainer}>
            <View style={styles.profileContainer}>
              <Image style={styles.image} source={Images.model} />
              <View style={styles.containerNameEmail}>
                <Text style={styles.txtName}>John Doe</Text>
                <Text style={styles.txtEmail}>johndoe@gmail.com</Text>
              </View>
              <Pressable onPress={() => setModalVisible(false)}>
                <Image style={styles.imageNext} source={Images.next} />
              </Pressable>
            </View>
            <View style={styles.viewBorder} />
            <Pressable
              onPress={() => {
                navigation.navigate('dashBoard');
              }}>
              <BottomSheet
                icon={Images.transaction}
                categoriesName={'Transaction'}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('categories');
              }}>
              <BottomSheet icon={Images.list} categoriesName={'Categories'} />
            </Pressable>
            <BottomSheet icon={Images.delete} categoriesName={'Trash'} />
            <Pressable
              onPress={() => {
                navigation.navigate('setting');
              }}>
              <BottomSheet icon={Images.setting} categoriesName={'Setting'} />
            </Pressable>
            <BottomSheet icon={Images.info} categoriesName={'About us'} />
            <BottomSheet icon={Images.like} categoriesName={'Feedback'} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  containerBottom: {
    flexDirection: 'row',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 3},
    width: '100%',
    height: 35,
    justifyContent: 'space-between',
  },
  containerBottomNavigation: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 25,
  },
  bottomNavigationImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.grey1,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 25,
    backgroundColor: COLORS.yellow,
    textShadowRadius: 10,
    borderWidth: 3,
    borderColor: COLORS.grey3,
    top: -25,
    position: 'absolute',
  },
  containerMenuImage: {
    top: -20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menuButton: {
    width: 20,
    height: 20,
    tintColor: COLORS.themeColor,
  },
  searchButton: {
    width: 20,
    height: 20,
    tintColor: COLORS.themeColor,
  },
  modalMainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modelContainer: {
    flex: 0.5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  profileContainer: {
    flexDirection: 'row',
    marginStart: 20,
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerNameEmail: {
    flexDirection: 'column',
    flex: 1,
    marginStart: 10,
    marginTop: 5,
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
  },
  imageNext: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    marginEnd: 10,
    tintColor: COLORS.themeColor,
  },
  viewBorder: {
    height: 2,
    backgroundColor: COLORS.grey3,
    marginTop: 10,
  },
});
