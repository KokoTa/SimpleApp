import {CheckBox} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function RNECheckBoxGroup() {
  const [list, setList] = useState<RNECheckBoxGroupItem[]>([
    {
      title: 'a',
      checked: false,
      value: 1,
    },
    {
      title: 'b',
      checked: false,
      value: 2,
    },
  ]);

  const handleCheckBoxChange = (item: RNECheckBoxGroupItem) => {
    setList(
      list.map((boxItem: RNECheckBoxGroupItem) => {
        if (boxItem.title === item.title) {
          boxItem.checked = !boxItem.checked;
        }
        return boxItem;
      }),
    );
  };

  return (
    <>
      <View>
        <Text>Checkbox</Text>
      </View>
      <View style={styles.root}>
        {list.map((item: RNECheckBoxGroupItem, index: number) => (
          <CheckBox
            containerStyle={styles.container}
            key={index}
            title={item.title}
            checked={item.checked}
            onPress={() => handleCheckBoxChange(item)}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 0,
    margin: 0,
  },
});

export default RNECheckBoxGroup;
