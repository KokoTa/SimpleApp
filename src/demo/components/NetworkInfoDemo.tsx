import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Text, View} from 'react-native';

function NetworkInfoDemo() {
  const [type, setType] = useState<string>('');
  const [isConnect, setIsConnect] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state);
      setType(state.type);
      setIsConnect(state.isConnected);
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>
        {type}: {String(isConnect)}
      </Text>
    </View>
  );
}

export default NetworkInfoDemo;
