import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, View} from 'react-native';
import MusicItem from './MusicItem';
import {RefreshControl} from 'react-native-gesture-handler';
import colors from '../../../global/colors';
import {StyleSheet} from 'react-native';

function MusicList(props: any) {
  const {listData, refreshing, onRefresh, isLoading, onReachBottom} = props;
  return (
    <FlatList
      data={listData}
      renderItem={MusicItem}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl
          title="loading"
          titleColor={colors.PURPLE}
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.PURPLE]}
          tintColor={colors.PURPLE}
        />
      }
      onEndReached={onReachBottom}
      ListFooterComponent={() => {
        return (
          <View>
            <Text style={styles.loading}>{isLoading ? 'Loading...' : ''}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    paddingVertical: 5,
  },
});

MusicList.propTypes = {
  listData: PropTypes.array,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
  isLoading: PropTypes.bool,
  onReachBottom: PropTypes.func,
  ref: PropTypes.object,
};

export default MusicList;
