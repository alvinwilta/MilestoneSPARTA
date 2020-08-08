import React, { Component } from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'


export default class App extends Component {
    render(){
        
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"300",color:"#2C94A6", marginLeft:30}}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily:'Roboto', fontSize:20, fontWeight:"bold",color:"#2C94A6", marginLeft:60 }}>Add New Task</Text>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"300",color:"#2C94A6", marginLeft:60}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>  
                    <TextInput style={styles.taskInput} placeholder="Title"/>
                    <TextInput style={styles.descInput} placeholder="Description"/>
                    <View style={styles.setting}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6", marginLeft:30}}>Set Time</Text>
                        <TouchableOpacity style={{marginLeft:240}}>
                            <Icon name="date-range" size={24} color="#2C94A6" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setting}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6", marginLeft:30}}>Reminders</Text>
                        <TouchableOpacity style={{marginLeft:120, flexDirection:'row', marginTop:3}}>
                            <Text style={{fontFamily:'Roboto', fontSize:14,  fontWeight:"normal",color:"#B5B1B1", marginLeft:30}}>No Reminders</Text>
                            <Icon name="keyboard-arrow-right" size={18} color="#B5B1B1" />                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.setting}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6", marginLeft:30}}>Tags</Text>
                        <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#2C94A6", borderRadius:10,height:20, width:90, textAlign:'center', marginTop:3, marginLeft:40}}>Education</Text>
                        <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#2C94A6", borderRadius:10,height:20, width:90, textAlign:'center', marginTop:3, marginLeft:10}}>Education</Text>
                        <TouchableOpacity style={{marginLeft:10, flexDirection:'row'}}>
                            <Ionicon name="md-add-circle" size={24} color="#F9AC40"/>                        
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        color:"#E2EAEC",
    },
    topBar : {
        flexDirection: "row",
        alignItems:'flex-start',
        justifyContent:"center",
        marginTop:50
    },
    body : {
        alignItems:"flex-start",
        marginTop:40
    },
    taskInput: {
        backgroundColor: "#AADDE6",
        borderRadius: 15,
        fontSize: 16,
        paddingBottom: 5,
        marginLeft:20,
        paddingLeft:15,
        marginBottom:10,
        width:360,
        height:45
    },
    descInput: {
        backgroundColor: "#AADDE6",
        borderRadius: 15,
        fontSize: 16,
        paddingBottom: 120,
        marginLeft:20,
        paddingLeft:15,
        marginBottom:10,
        width:360,
        height:160
    },
    setting: {
        flexDirection:'row',
        marginTop:10
    }
})
