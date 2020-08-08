import React, { Component } from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import task from '../assets/task.json'


export default class Detail extends Component {
    render(){
        let id = parseInt(this.props.route.params.id);
        return (
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <View style={styles.monthBar}>
                            <TouchableOpacity>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:40 }}>June 2020</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#FFFFFF", marginRight:40, backgroundColor:"#2C94A6", width:113, height:25, textAlign:'center', borderRadius:15 }}>July 2020</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485" }}>June 2020</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dayBar}>
                            <TouchableOpacity >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>Tue</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>21</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>Wed</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>22</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>Thu</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>23</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:"#2C94A6", width:50, height:50, borderRadius:20}} >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#FFFFFF", marginRight:12, textAlign:'center', marginLeft:10 }}>Fri</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#FFFFFF", marginRight:12, textAlign:'center', marginLeft:9 }}>24</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>Sat</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>25</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>Sun</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:12, textAlign:'center' }}>26</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", textAlign:'center' }}>Mon</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", textAlign:'center' }}>27</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.taskBox}>
                        <View style={styles.taskBoxTopBar}>
                            <TouchableOpacity style={{marginLeft:20}} onPress={() => this.props.navigation.goBack()}>
                                <Icon2 name="arrow-left" size={25} color="#2C94A6" />
                            </TouchableOpacity>
                            <Text style={{fontFamily:'Roboto', fontSize:20, fontWeight:"bold",color:"#2C94A6", marginLeft:70 }}>Task Details</Text>
                            <TouchableOpacity style={{marginLeft:70}}>
                                <Icon name="create" size={25} color="#2C94A6" />
                            </TouchableOpacity>                    
                        </View>
                        <View style={styles.taskBoxBody}>
                            <TouchableOpacity style={{marginBottom:45, marginLeft:20, marginRight:20}}>
                                <Icon2 name="checkbox-blank-circle-outline" size={24} color="#2C94A6" />
                            </TouchableOpacity>
                            <View style={{width:215}}> 
                                <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"bold",color:"black" }}>{task.items[id].title}</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:"300",color:"black", marginTop:5 }}>{task.items[id].desc}</Text>
                                <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#2C94A6", borderRadius:10,height:20, width:90, textAlign:'center', marginTop:10 }}>{task.items[id].tagTitle}</Text>
                            </View>
                            <View>
                                <View style={styles.time}>
                                    <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"black", color:"#2C94A6", marginBottom:10 }}>{task.items[id].time}</Text>
                                    <Icon name="date-range" size={18} color="#2C94A6" />
                                </View>
                            </View>                       
                        </View>
                    </View>
                    <View style={styles.navBar}>
                        <TouchableOpacity style={styles.navItem} onPress={() => this.props.navigation.navigate('HomeArticle')}>
                            <Icon name="home" size={25} color="#7E8485"/>
                            <Text style={{color:"#7E8485"}}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navItem} onPress={() => this.props.navigation.navigate('Task')}>
                            <Ionicon name="ios-create" size={25} color="#2C94A6"/>
                            <Text style={{color:"#2C94A6"}}>Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navItem} onPress={() => this.props.navigation.navigate('Goal')}>
                            <Ionicon name="ios-navigate" size={25} color="#7E8485"/>
                            <Text style={{color:"#7E8485"}}>Goals</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navItem} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                            <Ionicon name="md-person" size={25} color="#7E8485"/>
                            <Text style={{color:"#7E8485"}}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        color:"#E2EAEC",
    },
    navBar : {
        backgroundColor: 'white',
        height: 60,
        width:365,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation:10,
        borderRadius:15,
        position: 'absolute',
        bottom:0
    },
    navItem : {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center'
    },
    topBar : {
        flexDirection: "column",
        justifyContent:"center",
        marginTop:40
    },
    monthBar : {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    dayBar : {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        marginTop:24
    },
    taskBox : {
        flexDirection:'column',
        width:356,
        height:500,
        elevation:2,
        marginTop:50,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'#FFFFFF',
        borderRadius:15
    },
    taskBoxTopBar:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:20
    } ,
    taskBoxBody: {
        flexDirection:'row',
        marginTop:30
    },
    time : {
        flexDirection: "row",
        marginBottom:30,
    }

})
