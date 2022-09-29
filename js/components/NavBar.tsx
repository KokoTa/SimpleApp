import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const NavBar = (props: any) => {
  const {title, renderLeft, renderRight, handleDefaultLeftClick} = props;

  return (
    <View style={styles.wrap}>
      <View>
        {renderLeft ? (
          renderLeft
        ) : (
          <TouchableOpacity onPress={handleDefaultLeftClick}>
            <Icon name="left" size={18} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View>{renderRight}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  titleWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 100,
    right: 100,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 16,
  },
});

NavBar.propTypes = {
  title: PropTypes.string,
  renderLeft: PropTypes.element,
  renderRight: PropTypes.element,
  handleDefaultLeftClick: PropTypes.func,
};

export default NavBar;
