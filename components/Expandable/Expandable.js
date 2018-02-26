import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView
} from 'react-native';
import {
  Card
} from '../../components';


export default class Expandable extends Component {
  state = {
    expanded: false,
  }

  renderCards(contentList){
    return contentList.map((content, index) => (
    <Card
      key={index}
      data={content}
    />
    ));
  }

  render() {
    return (
      <View style={styles.expandable}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Button
            style={styles.button}
            title={this.state.expanded ? '-' : '+'}
            onPress={() => this.setState({
              expanded: !this.state.expanded,
            })}
            color={'#000'}
          />
        </View>
        {this.state.expanded && <ScrollView style={styles.body}>
          {this.renderCards(this.props.data)}
        </ScrollView>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  expandable: {
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    backgroundColor: '#80CBC4',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  body: {
    backgroundColor: '#E0F2F1',
    height: 300,
    overflow: 'scroll',
  },
  button:{
    margin: 15,
  }
});
