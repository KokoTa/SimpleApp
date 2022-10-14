import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

/**
 * 监听APP状态
 * @returns
 */
function useAppState() {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const sub = AppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
    });
    return () => {
      sub.remove();
    };
  }, []);

  return appState;
}

export default useAppState;
