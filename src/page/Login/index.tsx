import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../style/Colors';

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
        <Text style={styles.button}>Go Home</Text>
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
        <Text style={styles.button}>Go TrendingHot</Text>
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
  button: {
    backgroundColor: Colors.Purple,
    padding: 10,
    color: Colors.White,
    margin: 10,
    borderRadius: 5,
  },
});

export default Login;
