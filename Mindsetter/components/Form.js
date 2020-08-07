import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import { RevealFromBottomAndroid } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';
//import { TextInput } from 'react-native-gesture-handler';

export default class Logo extends React.Component<{}> {
    render(){
        return(
            <View style={styles.container}> 
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'transparent'} 
                    placeholder="Email"
                    placeholderTextColor = '#155F69'   
                    /> 
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    placeholderTextColor = '#155F69' 
                    /> 
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <Text style={styles.add}>Don`t have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>

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

    inputBox: {
        width: 300,
        backgroundColor:'#40B8CD',
        borderRadius: 20,
        //paddingBottom: 15,
        paddingVertical: 14,
        paddingHorizontal: 16,
        //paddingLeft: 15,
        //marginRight: 15,
        //marginBottom: 10,
        //paddingTop: 120, 
        fontSize:16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: 'rgba(255, 178, 65, 1)',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize:25,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    signUp: {
        color: '#F9AC40',
        fontWeight: 'bold'
    },
    add: {
       color: '#ffffff',
       fontWeight: 'bold' 
    }
    
  });