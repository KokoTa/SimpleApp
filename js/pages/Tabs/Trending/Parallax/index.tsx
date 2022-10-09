import {Card} from '@rneui/base';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AvatarHeaderScrollView} from 'react-native-sticky-parallax-header';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationUtil from '../../../../navigator/NavigationUtil';

function Parallax() {
  return (
    <View style={styles.root}>
      <AvatarHeaderScrollView
        leftTopIcon={() => <Icon name="left" size={18} />}
        leftTopIconOnPress={() => NavigationUtil.back()}
        contentContainerStyle={styles.contentContainerStyle}
        containerStyle={styles.containerStyle}
        image={{uri: 'https://via.placeholder.com/150'}}
        title={'Title'}
        subtitle={'SubTitle'}
        showsVerticalScrollIndicator={false}
        snapToEdge={false}
        parallaxHeight={250}
        hasBorderRadius
        backgroundColor={'lightblue'}>
        <View style={styles.content}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <Card key={item}>
              <Card.Title>Card Title</Card.Title>
              <Card.Divider />
              <View style={styles.item}>
                <Image source={{uri: 'https://via.placeholder.com/150'}} />
                <Text>Card Content {item}</Text>
              </View>
            </Card>
          ))}
        </View>
      </AvatarHeaderScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: '#eee',
  },
  containerStyle: {
    backgroundColor: 'gray',
  },
  content: {
    paddingVertical: 20,
  },
  item: {
    padding: 10,
  },
});

export default Parallax;
