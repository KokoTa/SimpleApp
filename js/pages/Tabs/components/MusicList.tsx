import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import MusicItem from './MusicItem';
import {RefreshControl} from 'react-native-gesture-handler';
import colors from '../../../global/colors';

function MusicList(props: any) {
  const {listData, refreshing, onRefresh} = props;
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
    />
  );
}

MusicList.propTypes = {
  listData: PropTypes.array,
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
};

export default MusicList;
