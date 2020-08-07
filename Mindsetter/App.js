import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

<<<<<<< HEAD
import HomeVideo from './Screens/HomeScreenVideo'
import HomeArticle from './Screens/HomeScreenArticle'
=======
import Login from './Screens/Login'
>>>>>>> bfe0f95a5bf13dae6b6a60b3dd5b65045e861666

//import Home from './Screens/HomeScreen'
/*

export default function() {
  return (
    <HomeArticle />
  );
}
*/
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C94A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  