import Clipboard from '@react-native-clipboard/clipboard';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

function CopyValue() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = async () => {
    Clipboard.setString('Hello');
    setTimeout(async () => {
      const text = await Clipboard.getString();
      setCopiedText(text);
    }, 1000);
  };

  return (
    <>
      <TouchableOpacity onPress={handleCopy}>
        <Text>Copy Value</Text>
      </TouchableOpacity>
      <Text>Show: {copiedText}</Text>
    </>
  );
}

export default CopyValue;
