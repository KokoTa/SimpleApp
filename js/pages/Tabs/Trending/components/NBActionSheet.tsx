import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actionsheet} from 'native-base';
import {Icon} from '@rneui/base';

function NBActionSheet() {
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setSheetVisible(true)}>
        <Text>ActionSheet</Text>
      </TouchableOpacity>
      <Actionsheet
        isOpen={sheetVisible}
        onClose={() => setSheetVisible(false)}
        hideDragIndicator>
        <Actionsheet.Content>
          <View style={styles.actionSheetHead}>
            <Icon
              name="close"
              size={20}
              onPress={() => setSheetVisible(false)}
            />
          </View>
          <ScrollView style={styles.actionSheetScrollView}>
            {Array(20)
              .fill(0)
              .map((item, index) => {
                return (
                  <Actionsheet.Item key={index} disabled={index === 2}>
                    {index}
                  </Actionsheet.Item>
                );
              })}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

const styles = StyleSheet.create({
  actionSheetHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 10,
  },
  actionSheetScrollView: {
    height: 200,
    width: '100%',
  },
});

export default NBActionSheet;
