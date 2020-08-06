import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}> {
    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form/>
            </View>
        )
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