import {
  Alert,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LoginInput from '../components/LoginInput';
import NavBar from '../components/NavBar';

export default function Login(props: any) {
  const {title} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
    if (!username || !password) {
      Alert.alert('标题', '用户名和密码不能为空');
    }
  };

  const handleHelp = () => {
    Linking.openURL('https://baidu.com');
  };

  const handleBackup = () => {};
  const handleSignUp = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <NavBar
        title={title}
        handleDefaultLeftClick={handleBackup}
        renderRight={
          <TouchableOpacity onPress={handleSignUp}>
            <Text>注册</Text>
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <LoginInput
          label={'用户名'}
          placeholder={'请输入用户名'}
          onChangeText={(text: string) => setUsername(text)}
          shortLine={true}
        />
        <LoginInput
          label={'密码'}
          placeholder={'请输入密码'}
          onChangeText={(text: string) => setPassword(text)}
          secure={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
          <Text>获取帮助</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  loginButton: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  loginText: {
    color: 'white',
  },
  helpButton: {
    alignItems: 'center',
  },
});
