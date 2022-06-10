import React from 'react';
import {FlatList, View} from 'react-native';
import {CategoriesCell} from './categoriesCell';

export const CategoriesListView = () => {
  return (
    <View>
      <FlatList
        data={[
          {key: 'Android'},
          {key: 'iOS'},
          {key: 'Java'},
          {key: 'Swift'},
          {key: 'Php'},
        ]}
        renderItem={({item, index}) => <CategoriesCell />}
      />
    </View>
  );
};
