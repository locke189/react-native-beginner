import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import {
  Expandable
} from '../../components';

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
      .sort()
      .map(region => (
        <Expandable
          key={region || 'other'}
          title={region || 'Other'}
          data={regions[region]}
        />
      ));
  }

  render() {
    console.log('state');
    console.log(this.state.regions);
    return (
      <ScrollView style={styles.countryBrowser}>
        {this.renderRegions(this.state.regions)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryBrowser: {
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
