import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function CustomScrollSelect() {
  const [list] = useState<any>(
    Array(20)
      .fill(1)
      .map((n, i) => i),
  );

  return (
    <>
      <View>
        <Text>CustomScrollSelect</Text>
      </View>
      <View style={styles.root}>
        <LinearGradient
          style={styles.borderTopWrap}
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}>
          <View style={styles.borderTop} />
        </LinearGradient>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.padTop} />
            {list.map((item: any, index: number) => (
              <View
                key={index}
                style={styles.item}
                onLayout={(event: any) => {
                  // const {x, y, height, width} = event.nativeEvent.layout;
                  // console.log(x, y, height, width);
                }}>
                <Text style={styles.itemText}>
                  {item}-{item}
                </Text>
              </View>
            ))}
            <View style={styles.padBottom} />
          </View>
        </ScrollView>
        <LinearGradient
          style={styles.borderBottomWrap}
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <View style={styles.borderBottom} />
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {},
  root: {
    height: 200,
    position: 'relative',
    backgroundColor: '#fff',
  },
  borderTopWrap: {
    height: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
  },
  borderTop: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  borderBottomWrap: {
    height: 80,
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    zIndex: 200,
  },
  borderBottom: {
    flex: 1,
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },
  padTop: {
    height: 80,
  },
  padBottom: {
    height: 80,
  },
  scroll: {},
  item: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default CustomScrollSelect;
