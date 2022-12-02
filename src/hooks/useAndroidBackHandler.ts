import {useEffect} from 'react';
import {BackHandler} from 'react-native';

/**
 * 监听安卓物理返回键
 * @param backAction
 */
function useAndroidBackHandler(backAction: any) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [backAction]);
}

export default useAndroidBackHandler;
