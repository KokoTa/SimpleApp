import React, {useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {uploadApi} from '../../../../api';
import FitImage from 'react-native-fit-image';

function ImagePicker() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
    });
    console.log(result);

    // https://stackoverflow.com/questions/68089031/axios-post-formdata-not-working-properly-in-react-native
    if (result.assets?.length) {
      const {uri, fileName, type} = result.assets[0];
      const formData = new FormData();
      formData.append('file', {
        name: fileName,
        type,
        uri: Platform.OS === 'ios' ? uri?.replace('file://', '') : uri,
      });
      const uploadRes = await uploadApi(formData);
      console.log(uploadRes.data);
      if (uploadRes.data.path) {
        setImageUrl(uploadRes.data.path);
      }
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleImageLibrary()}>
        <Text>Open Image Library</Text>
      </TouchableOpacity>
      {/* https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native */}
      {imageUrl ? <FitImage source={{uri: imageUrl}} /> : null}
    </View>
  );
}

export default ImagePicker;
