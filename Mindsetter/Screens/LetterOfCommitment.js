import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Logo extends React.Component<{}> {
    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.dear}>Letter Of Commitment</Text>
                <Text style={styles.dear}>Dear My Future Self,</Text>
                <TextInput style={styles.inputBox}
                    placeholder="Write your Commitment Here.."
                    multiline={true}
                    underlineColorAndroid={'transparent'} 
                    placeholderTextColor = '#000000'   
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HomeArticle')}>
                    <Text style={styles.buttonText}>Submit</Text>
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
        height:340,
        margin: 10,
        padding: 200,
        borderColor:'gray',
        borderWidth: 2,
        fontSize: 16,
        backgroundColor: '#E2EAEC',
        width: 300,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginVertical: 15
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
    dear: {
        color: 'rgba(0,0,0,0.6)',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:20
    
    }
    
  });