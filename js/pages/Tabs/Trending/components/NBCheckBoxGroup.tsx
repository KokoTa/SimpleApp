import {Checkbox, HStack} from 'native-base';
import React, {useState} from 'react';
import {Text, View} from 'react-native';

function NBCheckBoxGroup() {
  const [list] = useState<NBCheckBoxGroupItem[]>([
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
  const [selected, setSelected] = useState([]);

  return (
    <>
      <View>
        <Text>Checkbox</Text>
      </View>
      {/* 如果想要自定义样式，需要在 NativeBaseProvider 中传入修改，无法直接改样式 */}
      <Checkbox.Group onChange={setSelected} value={selected}>
        <HStack space={5}>
          {list.map((item: NBCheckBoxGroupItem, index: number) => (
            <Checkbox
              key={index}
              value={item.value}
              _text={{
                color: 'red.400',
              }}>
              {item.title}
            </Checkbox>
          ))}
        </HStack>
      </Checkbox.Group>
    </>
  );
}

export default NBCheckBoxGroup;
