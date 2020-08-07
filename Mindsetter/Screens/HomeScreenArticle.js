import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import task from '../assets/task.json'
import article from '../assets/articles.json'

class ArticleItem extends Component {
    render(){
        let article = this.props.article;
        let url = this.props.article.url;
        return(
                <View style={styles.articleBox}>
                    <Image source={{uri: article.thumbnail}} style={{width:108, height:60, marginLeft:10}}/>
                    <View style={{flex:1, marginLeft:10}}> 
                        <TouchableOpacity>
                            <Text numberOfLines={2}
                                style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"#000000", flexWrap:"wrap"}}
                                onPress={() => {Linking.openURL(url)}}>{article.title}</Text>
                        </TouchableOpacity>
                        <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"normal",color:"#7E8485"}}>{article.date}</Text>
                    </View>
                </View>
        )
    }
};

export default class App extends Component {
    render() {
        const taskData = task.items;
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={{paddingTop:15}}>
                        <Text style={{fontFamily:'Roboto', fontSize:26, fontWeight:"bold",color:"#FFFFFF" }}>Friday,</Text>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#FFFFFF" }}>24 July 2020</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:"center", alignItems:"center", paddingTop:15, marginLeft:50}}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"normal",color:"#FFFFFF" }}>Natasha</Text>
                        <Image source={require('../assets/natasha.jpg')} style={{width:54, height:54, borderRadius:27, marginLeft:6}}/>
                    </View>
                </View>
                <View style={styles.taskBar}>
                    <View style={styles.taskTitle}>
                        <Text style={{fontFamily:'Roboto', fontSize:22, fontWeight:"bold",color:"#2C94A6", marginRight:150 }}>Current Tasks</Text>
                        <TouchableOpacity>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"bold",color:"#7E8485" }}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.taskBox}>
                        <TouchableOpacity style={{marginBottom:45}}>
                            <Icon2 name="checkbox-blank-circle-outline" size={24} color="#2C94A6" />
                        </TouchableOpacity>
                        <View style={styles.taskBoxTitle}> 
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"bold",color:"black" }}>{taskData[0].title}</Text>
                            <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:"300",color:"black", marginTop:5 }}>{taskData[0].shortDesc}</Text>
                            <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#CF4343", borderRadius:10,height:20, width:90, textAlign:'center', marginTop:10 }}>{taskData[0].tagTitle}</Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"black", color:"#2C94A6" }}>{taskData[0].time}</Text>
                            <Icon name="date-range" size={18} color="#2C94A6" />
                        </View>                    
                    </View>
                    <View style={styles.taskBox}>
                        <TouchableOpacity style={{marginBottom:45}}>
                            <Icon2 name="checkbox-blank-circle-outline" size={24} color="#2C94A6" />
                        </TouchableOpacity>
                        <View style={styles.taskBoxTitle}> 
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"bold",color:"black" }}>{taskData[1].title}</Text>
                            <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:"300",color:"black", marginTop:5 }}>{taskData[1].shortDesc}</Text>
                            <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"white", backgroundColor:"#43CF5A", borderRadius:10,height:20, width:90, textAlign:'center', marginTop:10 }}>{taskData[1].tagTitle}</Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={{fontFamily:'Roboto', fontSize:11, fontWeight:"bold",color:"black", color:"#2C94A6" }}>{taskData[1].time}</Text>
                            <Icon name="date-range" size={18} color="#2C94A6" />
                        </View>                    
                    </View>
                </View>
                <View style={styles.articleVideoBar}>
                    <View style={styles.articleVideoTitle}>
                        <TouchableOpacity style={{alignItems:'center', marginRight:125}}>
                            <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6" }}>Articles</Text>
                            <View style={{borderBottomWidth: 3,borderBottomColor: '#F9AC40', width: 50}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"bold",color:"#2C94A6" }}>Videos</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={article.items}
                        renderItem={(article) => <ArticleItem article={article.item}/>}
                        keyExtractor={(item) =>item.id}
                        />
                </View>    
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.navItem}>
                        <Icon name="home" size={25} color="#2C94A6"/>
                        <Text style={{color:"#2C94A6"}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicon name="ios-create" size={25} color="#7E8485"/>
                        <Text style={{color:"#7E8485"}}>Task</Text>
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
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        color:"#E2EAEC",
    },
    topBar: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:375,
        height:115,
        marginTop:-10,
        backgroundColor:'#2C94A6',
        borderRadius:20,
        position:"absolute",
        top:0
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
    taskBar:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginTop:125,
    },
    taskTitle: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:15
    },
    taskBox:{
        width:356,
        height:96,
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around',
        elevation:6,
        borderRadius:15,
        marginBottom:20
    },
    time : {
        flexDirection: "row",
        marginBottom:45
    },
    articleVideoBar : {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    articleVideoTitle : {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:15
    },
    articleBox : {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        elevation:1,
        width:356,
        height:100,
        backgroundColor:"#FFFFFF",
        borderRadius:15,
        marginBottom:10
    }
 }
)
