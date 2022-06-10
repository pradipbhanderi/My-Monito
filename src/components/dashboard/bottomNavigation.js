import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme/colors';
import {Images} from '../../assets/images';

export const BottomNavigation = () => {
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

      <Modal animationType={'fade'} visible={modalVisible} transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={{flex: 0.5, backgroundColor: '#00000000'}}
          />
          <View
            style={{
              flex: 0.5,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: 'white',
            }}>
            <Text onPress={() => setModalVisible(false)}> hello world</Text>
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
});
