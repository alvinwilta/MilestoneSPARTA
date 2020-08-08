import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import HomeVideo from './Screens/HomeScreenVideo'
import HomeArticle from './Screens/HomeScreenArticle'
import Login from './Screens/Login'
import Task from './Screens/TasksScreen'

export default function App() {
  return (
    <Task />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2EAEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  