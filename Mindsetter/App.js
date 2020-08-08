import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import ProfileScreen from './Screens/ProfileScreen';
import Register from './Screens/Register';
import Goal from './Screens/Goal';


export default function() {
  return(
    <Goal />    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
 }
);

