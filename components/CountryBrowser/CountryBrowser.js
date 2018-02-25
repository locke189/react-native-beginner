import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class CountryBrowser extends Component {
  render() {
    return (
      <View style={styles.countryBrowser}>
        <Text style={styles.title}>
          CountryBrowser Component!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countryBrowser: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
