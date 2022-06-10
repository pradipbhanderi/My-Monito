import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CategoriesListView} from '../components/categorie/categoriesListView';

export const Categories = () => {
  return (
    <View style={styles.container}>
      <CategoriesListView />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
