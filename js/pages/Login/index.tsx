import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../global/colors';
import NavigationUtil from '../../navigator/NavigationUtil';
import {useAppDispatch, useAppSelector} from '../../redux';
import {
  onThemeColorChangeAsync,
  selectThemeColor,
} from '../../redux/reducer/theme';

function Login() {
  const fadeWrap = useRef(new Animated.Value(0)).current;
  const [username, setUsername] = useState('');

  const themeColor = useAppSelector(selectThemeColor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Animated.timing(fadeWrap, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeWrap]);

  const handleLogin = () => {
    if (!username) {
      Alert.alert('Alert', 'Username is empty');
      return;
    }
    Toast.show({
      type: 'info',
      text1: `Hello ${username}!👋`,
      visibilityTime: 1000,
    });
    NavigationUtil.replace('TabNav');
  };

  return (
    <SafeAreaView style={{...styles.root, backgroundColor: themeColor}}>
      <Animated.View
        style={{
          ...styles.wrap,
          opacity: fadeWrap,
        }}>
        <Text style={styles.header}>SimpleApp</Text>
        <View style={styles.textInputWrap}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            placeholderTextColor={colors.GRAY}
          />
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={handleLogin}>
            <Icon
              style={styles.loginButtonIcon}
              name="arrowright"
              size={26}
              color={colors.WHITE}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              dispatch(onThemeColorChangeAsync(colors.LIGHT_PURPLE))
            }>
            <Text style={styles.colorChangeButton}>Change Theme Color</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  wrap: {
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: colors.WHITE,
  },
  textInputWrap: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: colors.GRAY,
    marginBottom: 10,
  },
  textInput: {
    color: colors.WHITE,
    fontSize: 16,
  },
  buttonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonIcon: {
    padding: 20,
  },
  colorChangeButton: {
    color: colors.WHITE,
  },
});

export default Login;
