import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';


export default class App extends Component  {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"300",color:"#2C94A6", marginLeft:30}}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily:'Roboto', fontSize:20, fontWeight:"bold",color:"#2C94A6", marginLeft:58 }}>Add New Diary</Text>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                        <Text style={{fontFamily:'Roboto', fontSize:18, fontWeight:"300",color:"#2C94A6", marginLeft:58}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>  
                    <TextInput style={styles.taskInput} placeholder="Title"/>
                    <TextInput style={styles.descInput} placeholder="Description"/>
                    <View style={styles.typeSetting}>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Image style={{width:20,height:20}} source={require('../assets/bold.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Image style={{width:20,height:20}} source={require('../assets/italic.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Image style={{width:20,height:20}} source={require('../assets/underline.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:40}}>
                            <View style={{width:25,height:25, backgroundColor:'red', borderRadius:12.5}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:40, flexDirection:'row'}}>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"black", marginRight:5}}>Roboto</Text>
                            <Icon name="triangle-down" size={25} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:20, flexDirection:'row'}}>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"black", marginRight:5}}>14</Text>
                            <Icon name="triangle-down" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tagsDate}>
                        <TouchableOpacity style={styles.tagsDateItem}>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"black", marginRight:60, marginLeft:20}}>Tags</Text>
                            <Icon name="triangle-down" size={25} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tagsDateItem}>
                            <Text style={{fontFamily:'Roboto', fontSize:16, fontWeight:"normal",color:"black", marginRight:60, marginLeft:20}}>Date</Text>
                            <Icon2 name="date-range" size={20} color="black" />
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
    typeSetting: {
        backgroundColor: "#AADDE6",
        borderRadius: 15,       
        marginLeft:20,
        paddingLeft:15,
        marginBottom:10,
        width:360,
        height:40,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    tagsDate:{
        flexDirection:'row',
        justifyContent : 'flex-start',
        alignItems:'center'        
    },
    tagsDateItem : {
        backgroundColor:"#AADDE6",
        width:150,
        height:25,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginLeft:32,
        borderRadius:5
    
    }
})
