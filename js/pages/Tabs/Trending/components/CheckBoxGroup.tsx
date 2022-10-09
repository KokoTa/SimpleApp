import {CheckBox} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';

function CheckBoxGroup(props: any) {
  const {list, onPress, isInline} = props;
  return (
    <View style={isInline ? styles.root : {}}>
      {list.map((item: CheckBoxGroupItem, index: number) => (
        <CheckBox
          key={index}
          title={item.title}
          checked={item.checked}
          onPress={() => onPress(item)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxGroup;
