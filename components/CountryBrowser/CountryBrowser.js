import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

export default class CountryBrowser extends Component {
  state = {regions: {}};

  componentWillMount(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => {
        console.log(data);
        this.setState({regions: this.createCountryDataStructure(data)}, () => console.log(this.state));
      })
      .catch(error => {
        console.log(error.response)
    });
  }

  createCountryDataStructure(countryList){
    return countryList.reduce(this.reduceCountryListToRegionObject, {});
  }

  reduceCountryListToRegionObject(result, country){
    const newResult = result;
    if(newResult[country.region]){
      newResult[country.region].push(country);
    }
    else{
      newResult[country.region] = [country];
    }
    return newResult;
  }

  renderRegions(regions){
    return Object.keys(regions)
      .map(region => {(
        <Text key={region}>{region}</Text>
      )});
  }

  render() {
    console.log('state');
    console.log(this.state.regions);
    return (
      <View style={styles.countryBrowser}>
        <Text style={styles.title}>
          CountryBrowser Component!
          {this.renderRegions(this.state.regions)}
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
