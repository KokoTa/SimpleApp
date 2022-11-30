import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GlobalStyle from '../../style/GlobalStyle';

function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.wrap}>
      <Text>Login</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('HomeBottomTabs', {
            screen: 'Home',
          });
        }}>
        <Text style={GlobalStyle.ButtonText}>Go Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('HomeBottomTabs', {
            screen: 'TrendingTopTabs',
            params: {
              screen: 'TrendingHot',
            },
          });
        }}>
        <Text style={GlobalStyle.ButtonText}>Go TrendingHot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
