import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Modal, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';

export default class Goal extends Component {
    constructor() {
        super();
    this.state={
        show:false
    }
}
    CheckBoxTest(){
        this.setState({
            check:!this.state.check
        })
        //alert("now value is "+ !this.state.check)
    }
    render() {
        return (
            <View>
                <Text style={styles.header}>Goal Tracker</Text>
                <ScrollView>
                    <View style={styles.goals}>
                        <Image style={styles.gimage} source={require('../components/icon-greysquare.png')}/>
                        <Text style={styles.taskname}>15 Minutes Workout</Text>
                        <Text style={styles.timegoals}>Done <CheckBox value={this.state.check} onChange={()=>this.CheckBoxTest()} /></Text>
                    </View>
                    <View style={styles.goals}>
                        <Image style={styles.gimage} source={require('../components/icon-greysquare.png')}/>
                        <Text style={styles.taskname}>15 Minutes Workout</Text>
                        <Text style={styles.timegoals}>Done <CheckBox value={this.state.check} onChange={()=>this.CheckBoxTest()} /></Text>
                    </View>
                    <View style={styles.goals}>
                        <Image style={styles.gimage} source={require('../components/icon-greysquare.png')}/>
                        <Text style={styles.taskname}>15 Minutes Workout</Text>
                        <Text style={styles.timegoals}>Done <CheckBox value={this.state.check} onChange={()=>this.CheckBoxTest()} /></Text>
                    </View>
                    
                    
                                      
                    <Button title="add goal icon" onPress={()=>{this.setState({show:true})}} />

                    <Modal 
                    transparent={true}                
                    visible={this.state.show}
                    >
                <View style={{backgroundColor:'rgba(0, 0, 0, 0.25)',flex:1}}>
                        <View style={styles.popup}>
                            <ScrollView>
                                <Text style={styles.title}>Add Goal</Text>
                                
                                <Text style={styles.sub}>Goal</Text>
                                <TextInput style={styles.textinput} placeholder="Type your goal here..."/>
                                
                                <Text style={styles.sub}>Due Date</Text> 
                                <View style={{flexDirection:'row'}}>
                                    <TextInput style={styles.dateinput} placeholder="dd"/>
                                    <TextInput style={styles.dateinput} placeholder="mm"/>                                    
                                    <TextInput style={styles.dateinput} placeholder="yyyy"/>
                                </View>
                                
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.sub}>Time</Text>
                                    <Text style={styles.optional}>(Optional)</Text>
                                </View>                                
                                <TextInput style={styles.timeinput} placeholder="_ _ : _ _"/>
                                
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.sub}>Icon</Text>
                                    <Text style={styles.optional}>(Optional)</Text>
                                </View>
                                    <TouchableOpacity>
                                        <Image style={{width:40, height:40, marginBottom:10}} source={require('../components/icon-plus.png')}/>
                                    </TouchableOpacity>
                            </ScrollView>
                            <Button title="icon-plus" style={{margin:40}} onPress={()=>{this.setState({show:false})}} />

                        </View>
                    </View>
                    </Modal>
                </ScrollView>
                <View style={styles.taskbar}>
                    <TouchableOpacity><Image style={{width:40, height:40, marginLeft:30, marginTop:20}} source={require('../components/icon-home.png')}/><Text style={styles.texttaskbar}>Home</Text></TouchableOpacity>
                    <TouchableOpacity><Image style={{width:40, height:40, marginLeft:30, marginTop:20}} source={require('../components/icon-task.png')}/><Text style={styles.texttaskbar}>Task</Text></TouchableOpacity>
                    <TouchableOpacity><Image style={{width:40, height:40, marginLeft:30, marginTop:20}} source={require('../components/icon-goal.png')}/><Text style={styles.texttaskbar}>Goal</Text></TouchableOpacity>
                    <TouchableOpacity><Image style={{width:40, height:40, marginLeft:30, marginTop:20}} source={require('../components/icon-profile.png')}/><Text style={styles.texttaskbar}>Profile</Text></TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      alignItems:'stretch',
      justifyContent:'center',
      backgroundColor:"#FFFFFF",
      marginBottom:20
    },
    taskbar: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6,},
        shadowOpacity: 0.37,
        elevation: 10,
        margin: 10,
        padding: 10
        

    },
    texttaskbar:{
        color: '#7E8485',
        fontSize: 11,
        paddingLeft: 30
    },
    optional: {
        color: '#B8B8B8',
        fontSize: 10,
        margin: 25

    },

    timeinput: {
        color: 'rgba(0, 0, 0, 0.25)',
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-start',
        borderRadius: 5,
        fontSize: 14,
        padding: 10,
        alignSelf: 'flex-start'
    }, 
    dateinput: {
        color: 'rgba(0, 0, 0, 0.25)',
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 10,
        fontSize: 14,
        padding: 10
    }, 
    textinput:{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.25)',
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        padding: 20
    },
    popup: {
        padding: 25,
        margin: 30,
        marginTop: 60,
        marginBottom: 100,
        backgroundColor: "#ffffff",
        borderRadius: 10
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#000000",
        marginBottom: 20
    },
    sub: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#454545",
        marginTop: 10
    },

    gimage: {
        width: 80,
        height: 80,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        position: 'absolute'
    },
    goals: {
        height: 100,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6,},
        shadowOpacity: 0.37,
        elevation: 12,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 100,
        paddingTop: 10
    },
    taskname: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    timegoals: {
        fontSize: 10,
        color: '#4C6267'
    },
    header: {
        fontSize: 32,
        paddingTop: 50,
        paddingBottom:20,
        paddingLeft: 20,
        fontWeight: "bold",
        backgroundColor: "#FAFAFA",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6,},
        shadowOpacity: 0.37,
        position: 'relative',
        elevation: 12
    
    },
 }
)