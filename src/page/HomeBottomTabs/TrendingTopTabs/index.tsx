import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TrendingCount from './TrendingCount';
import TrendingHot from './TrendingHot';
import TrendingTop from './TrendingTop';

const TopTab = createMaterialTopTabNavigator();

function Trending() {
  const safeArea = useSafeAreaInsets();

  return (
    <View style={styles.wrap}>
      <View style={{...styles.block, paddingTop: safeArea.top}} />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: 'none',
          },
          lazy: true,
        }}>
        <TopTab.Screen name="TrendingTop" component={TrendingTop} />
        <TopTab.Screen name="TrendingHot" component={TrendingHot} />
        <TopTab.Screen name="TrendingCount" component={TrendingCount} />
      </TopTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  block: {
    backgroundColor: '#fff',
  },
});

export default Trending;
