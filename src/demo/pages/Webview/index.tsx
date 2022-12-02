import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import useAndroidBackHandler from '../../../hooks/useAndroidBackHandler';
import Colors from '../../../styles/Colors';

function Webview() {
  const navigation = useNavigation();
  const webview = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const handlePressBack = useCallback(
    (action: any) => {
      console.log(canGoBack);
      if (canGoBack) {
        webview.current?.goBack();
      } else {
        if (action) {
          navigation.dispatch(action);
        } else {
          navigation.goBack();
        }
      }
      return true;
    },
    [navigation, canGoBack],
  );

  useAndroidBackHandler(handlePressBack);

  const handleBack = useCallback(
    (e: any) => {
      e.preventDefault();
      handlePressBack(e.data.action);
    },
    [handlePressBack],
  );

  useEffect(() => {
    const subscribe = navigation.addListener('beforeRemove', handleBack);
    return subscribe;
  }, [navigation, handleBack]);

  return (
    <View style={styles.content}>
      <WebView
        ref={webview}
        source={{uri: 'https://baidu.com'}}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <Text>Loading...</Text>
          </View>
        )}
        onNavigationStateChange={e => {
          setCanGoBack(e.canGoBack);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  content: {
    flex: 1,
  },
  // https://github.com/react-native-webview/react-native-webview/issues/1031
  loading: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Webview;
