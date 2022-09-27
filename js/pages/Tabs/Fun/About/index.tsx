import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function About() {
  useEffect(() => {
    setTimeout(() => {
      console.log('Hello');
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      <Text>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default About;
