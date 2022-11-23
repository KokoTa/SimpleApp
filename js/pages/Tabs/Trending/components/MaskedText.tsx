import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function MaskedText() {
  return (
    <View>
      <View>
        <Text>Masked View</Text>
      </View>
      <MaskedView
        style={styles.maskedStyle}
        maskElement={
          <View style={styles.element}>
            <Text style={styles.text}>Basic Mask</Text>
          </View>
        }>
        {/* <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
        <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
        <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
        <View style={{flex: 1, height: '100%', backgroundColor: '#e1e1e1'}} /> */}
        <Image
          style={styles.image}
          source={{
            uri: 'https://placekitten.com/400/200',
          }}
        />
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  maskedStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },
  element: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MaskedText;
