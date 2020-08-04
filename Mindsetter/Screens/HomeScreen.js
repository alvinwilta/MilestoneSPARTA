import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Homeee boi</Text>
                <Text>Homeee boi</Text>
                <Text>Homeee boi</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      color:"#E9EAEF",
    },
 }
)
