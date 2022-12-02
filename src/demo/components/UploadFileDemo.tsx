import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {uploadApi} from '../../api';
import GlobalStyle from '../../styles/GlobalStyle';

function UploadFileDemo() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
    });
    console.log(result);

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
        <Text style={GlobalStyle.ButtonText}>Upload File</Text>
      </TouchableOpacity>
      {imageUrl ? (
        <View style={styles.imageWrap}>
          <Image source={{uri: imageUrl}} style={styles.image} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrap: {
    height: 200,
  },
  image: {
    flex: 1,
  },
});

export default UploadFileDemo;
