import React from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';

function LinkApp() {
  const handleOpenOtherApp = async () => {
    const url = 'map://';
    try {
      await Linking.canOpenURL(url);
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleOpenOtherApp}>
      <Text>Link App</Text>
    </TouchableOpacity>
  );
}

export default LinkApp;
