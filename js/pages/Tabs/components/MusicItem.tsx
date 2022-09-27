import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'react-native';
import colors from '../../../global/colors';

function MusicItem(props: any) {
  const {title, description} = props.item;

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.root}>
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://via.placeholder.com/150',
            }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.desc} numberOfLines={4}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.GRAY,
    // IOS
    shadowColor: colors.GRAY,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    // Android
    elevation: 2,
    // 不设置背景色，则自元素全部都会应用阴影
    backgroundColor: colors.WHITE,
  },
  imageWrap: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    padding: 10,
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    paddingBottom: 5,
  },
  desc: {
    fontSize: 12,
    lineHeight: 16,
  },
});

export default MusicItem;
