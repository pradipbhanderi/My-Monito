import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import {BottomSheet} from '../dashboard/bottomsheet';
export const ChangeCurrency = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal animationType={'fade'} visible={modalVisible} transparent={true}>
      <View style={styles.modalMainContainer} >

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalMainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
