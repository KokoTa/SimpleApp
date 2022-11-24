import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Share from 'react-native-share';

function ShareMessage() {
  const handleShare = () => {
    Share.open({
      title: 'Title',
      message: 'Share message about: http://placekitten.com/200/200',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <>
      <View style={styles.root}>
        <TouchableOpacity onPress={() => handleShare()}>
          <Text>Share Message</Text>
        </TouchableOpacity>
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

export default ShareMessage;
