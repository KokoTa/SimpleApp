import {ParamListBase, Route} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  NativeScrollEvent,
  StyleSheet,
  NativeSyntheticEvent,
} from 'react-native';
import colors from '../../../../global/colors';
import NavigationUtil from '../../../../navigator/NavigationUtil';
import SearchBar from './components/SearchBar';
import Icon from 'react-native-vector-icons/AntDesign';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function Funny(params: any) {
  const [query, setQuery] = useState('');
  const route: Route<string, object> = params.route;
  const navigation: NativeStackNavigationProp<ParamListBase> =
    params.navigation;

  const handleConfirm = useCallback(() => {
    console.log(query);
  }, [query]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <SearchBar
          value={query}
          onChange={(text: string) => setQuery(text)}
          onSubmit={handleConfirm}
        />
      ),
      headerRight: () => (
        <Icon
          size={24}
          name={'search1'}
          color={colors.PURPLE}
          onPress={handleConfirm}
        />
      ),
    });
  }, [navigation, query, handleConfirm]);

  const handleBack = () => {
    NavigationUtil.to('Trending', {count: 100}, true);
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(e);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.scrollView}>
      {Object.entries(route.params).map(item => (
        <Text>
          {item[0]}: {item[1]}
        </Text>
      ))}
      <TouchableOpacity onPress={handleBack}>
        <Text>Go back with params</Text>
      </TouchableOpacity>
      <View style={styles.block} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {flex: 1, backgroundColor: 'pink'},
  block: {height: 1000, width: 100, backgroundColor: 'green'},
});

export default Funny;
