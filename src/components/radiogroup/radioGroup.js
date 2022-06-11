import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButtonCell} from './radioButtonCell';
import {COLORS} from '../../theme/colors';
export const RadioGroup = ({options}) => {
  const [label, setLabel] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {options.map(element => {
        return (
          <View key={element.key}>
            <RadioButtonCell
              label={element.label}
              onRadiobuttonPress={() => {
                setLabel(element.label);
              }}
              isSelect={element.label === label}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
});
