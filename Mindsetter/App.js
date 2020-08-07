import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeVideo from './Screens/HomeScreenVideo'
import HomeArticle from './Screens/HomeScreenArticle'

export default function App() {
  return (
    <HomeArticle />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  