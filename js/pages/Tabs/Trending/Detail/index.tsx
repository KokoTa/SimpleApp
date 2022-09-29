import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import NavBar from '../../../../components/NavBar';
import colors from '../../../../global/colors';
import useAndroidBackHandler from '../../../../hooks/useAndroidBackHandler';
import NavigationUtil from '../../../../navigator/NavigationUtil';

function Detail() {
  const webview = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleGoBack = () => {
    if (canGoBack) {
      webview.current?.goBack();
    } else {
      NavigationUtil.back();
    }
  };

  const handleAndroidPressBack = () => {
    handleGoBack();
    return true;
  };

  useAndroidBackHandler(handleAndroidPressBack);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <View style={styles.content}>
        <NavBar
          title={'Webview Detail Webview Detail Webview Detail Webview Detail'}
          handleDefaultLeftClick={handleGoBack}
        />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
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

export default Detail;
