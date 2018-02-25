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
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#009688',
    paddingTop: 15,
    height: 60,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    margin: 2,
  },
});
