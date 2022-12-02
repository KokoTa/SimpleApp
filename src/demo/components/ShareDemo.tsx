import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import GlobalStyle from '../../styles/GlobalStyle';

function ShareDemo() {
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
      <TouchableOpacity onPress={handleShare}>
        <Text style={GlobalStyle.ButtonText}>Share Message</Text>
      </TouchableOpacity>
    </>
  );
}

export default ShareDemo;
