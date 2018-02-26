import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Card extends Component {
  render() {
    const {
      name,
      population,
      capital,
      currencies,
      alpha2Code,
    } = this.props.data
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {name}
          </Text>

        </View>
        <Image
            style={{width: 60, height: 60, overflow: 'visible'}}
            source={{uri: "https://via.placeholder.com/350x150"}} />
        <View style={styles.content}>
          <Text>
            Capital: {capital || 'N/A'}
          </Text>
          <Text>
            Population: {population || 'N/A'}
          </Text>
          <Text>
            Currencies: {currencies.map(({name}) => name).join(',') || 'N/A'}
          </Text>
        </View>
      </View>
    );
  }
}
0
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2DFDB',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  header: {
    margin: 15,
  },
  title: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  content: {
    margin: 15,
    padding: 10,

  }
});
