import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Header Component!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FF0000',
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
