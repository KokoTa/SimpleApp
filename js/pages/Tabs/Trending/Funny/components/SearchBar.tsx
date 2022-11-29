import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function SearchBar(props: any) {
  return (
    <View>
      <TextInput
        placeholder="input search query"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus
        style={styles.text}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 16,
    maxWidth: 150,
  },
});

export default SearchBar;
