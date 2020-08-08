import React, { Component } from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import task from '../assets/task.json'
import diary from '../assets/diary.json'

class TaskItem extends Component {
    render(){
        let task = this.props.task;
        return(
                <View style={styles.taskBox}>
                    <TouchableOpacity style={{marginBottom:45, marginLeft:20, marginRight:20}}>
                        <Icon2 name="checkbox-blank-circle-outline" size={24} color="#2C94A6" />
                    </TouchableOpacity>
                    <View style={{width:215}}> 
                        <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"bold",color:"black" }}>{task.title}</Text>
                        <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:"300",color:"black", marginTop:5 }}>{task.shortDesc}</Text>
                        <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#2C94A6", borderRadius:10,height:20, width:90, textAlign:'center', marginTop:10 }}>{task.tagTitle}</Text>
                    </View>
                    <View>
                        <View style={styles.time}>
                            <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"black", color:"#2C94A6" }}>{task.time}</Text>
                            <Icon name="date-range" size={18} color="#2C94A6" />
                        </View>
                        <TouchableOpacity>
                            <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:"bold",color:"#2C94A6" }}>View Details</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
        )
    }
};

class DiaryItem extends Component {
    render(){
        let diary = this.props.diary;
        return(
            <TouchableOpacity style={styles.diaryBox}>
                <Text style={{fontFamily:'Roboto', fontSize:14, fontWeight:"bold",color:"#000000", marginRight:30, marginLeft:20, width:200}}>{diary.title}</Text>
                <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#2C94A6", borderRadius:10,height:20, width:90, textAlign:'center'}}>{diary.tagTitle}</Text>
            </TouchableOpacity>  
        )
    }
}

export default function App() {
    const diaryData = diary.items;
    return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={styles.monthBar}>
                        <TouchableOpacity>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#7E8485", marginRight:40 }}>June 2020</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#FFFFFF", marginRight:40, backgroundColor:"#2C94A6", width:113, height:25, textAlign:'center' }}>July 2020</Text>
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
                        <TouchableOpacity style={{backgroundColor:"#2C94A6", width:40, height:50}} >
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
                <View style={styles.taskList}>
                    <View style={styles.taskTitle}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6", marginRight:250, marginLeft:10}}>Tasks</Text>
                        <TouchableOpacity>
                            <Ionicon name="md-add-circle" size={32} color="#F9AC40"/>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={task.items}
                        renderItem={(task) => <TaskItem task={task.item}/>}
                        keyExtractor={(item) =>item.id}
                        />
                </View>
                <View style={styles.diaryList}>
                    <View style={styles.diaryTitle}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6", marginRight:250, marginLeft:10}}>Diary</Text>
                        <TouchableOpacity>
                            <Ionicon name="md-add-circle" size={32} color="#F9AC40"/>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={diary.items}
                        renderItem={(diary) => <DiaryItem diary={diary.item}/>}
                        keyExtractor={(item) =>item.id}
                    />                 
                </View>
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.navItem}>
                        <Icon name="home" size={25} color="#7E8485"/>
                        <Text style={{color:"#7E8485"}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicon name="ios-create" size={25} color="#2C94A6"/>
                        <Text style={{color:"#2C94A6"}}>Task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicon name="ios-navigate" size={25} color="#7E8485"/>
                        <Text style={{color:"#7E8485"}}>Goals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem} >
                        <Ionicon name="md-person" size={25} color="#7E8485"/>
                        <Text style={{color:"#7E8485"}}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
    taskList: {
        height:400
    },
    taskBox:{
        width:356,
        height:96,
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'flex-start',
        elevation:6,
        borderRadius:15,
        marginBottom:20
    },
    time : {
        flexDirection: "row",
        marginBottom:30,
    },
    taskTitle: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginTop:20,
        marginBottom:10
    },
    diaryTitle : {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginTop:20,
        marginBottom:10
    },
    diaryBox:{
        width:356,
        height:56,
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'flex-start',
        elevation:6,
        borderRadius:15,
        marginBottom:20
    }

 }
)
