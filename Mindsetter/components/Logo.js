import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component<{}> {
    render(){
        return(
            <View style={styles.container}> 
                <Image style={{width:100,height:140}}
                    source={require('../assets/Logo.png')}/>
                <Text style={styles.logoText}>Welcome to MindSetter</Text>
                </View>
            )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoText : {
        marginVertical: 10,
        fontSize:40,
        color:'rgba(255, 255, 255, 1)',
        paddingLeft: 20,
        paddingBottom: 0,
        paddingTop: 10,
        fontWeight: 'bold'

    }
  });