import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';
export default class App extends Component {

    constructor(props){
        super(props)

        this.state = ({
            email : '',
            password : ''
        })
    }

    SignUpUser = (email, password) =>{

        try{
            if(this.state.password.length < 6){
                alert("Please enter at least 8 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error){
            console.log(error.toString())
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Welcome to Mindsetter</Text>
                
                <TouchableOpacity style={styles.textinput}>
                    <Text style={styles.gbtntext}><Image style={{width:30,height:30}} source={require('../components/google.png')}/>Sign up with Google</Text>
                </TouchableOpacity>

                <Text style={styles.or}>or</Text>

                <TextInput style={styles.textinput} placeholder="Name"/>
                <TextInput style={styles.textinput} placeholder="Email"
                           onChangeText = {(email) => this.setState({email})}
                />
                <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true}
                           onChangeText = {(password) => this.setState({password})}
                />
                <TextInput style={styles.textinput} placeholder="Confirm Password" secureTextEntry={true}/> 

                <TouchableOpacity style={styles.button}
                                  onPress={() => {this.SignUpUser(this.state.email, this.state.password);
                                  this.props.navigation.navigate('Commitment')}}>
                    <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.add}>
                    <Text style={{textAlign:'center'}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.login}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class Register extends Component {
    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(function(user => {
            if (user) {
                this.props.navigation.navigate
                ('LetterOfCommitment');
            } else {
                this.props.navigation.navigate('Register');
            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'center',
        backgroundColor:"#2C94A6",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom:150
    },
    header: {
        fontSize: 40,
        paddingLeft:10,
        paddingBottom: 40,
        paddingTop: 150,
        color: "white",
        fontWeight: "bold"
    },
    textinput: {
        backgroundColor: "#40B8CD",
        borderRadius: 15,
        fontSize: 12,
        paddingBottom: 15,
        paddingLeft:15,
        marginRight: 15,
        marginBottom:10

    },
    gbtntext: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "Roboto",
        textAlign: "center" 
    },
    or: {
        color: "white",
        fontSize: 15,
        marginBottom: 10
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#F9AC40',
        marginLeft: 90,
        marginRight: 90,
        marginBottom: 10,
        marginTop: 10,
        paddingBottom: 5,
        borderRadius:20
    },
    btntext: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: "Roboto"       
    },
    add: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center"
    },
    login: {
        color: "#F9AC40",
        fontWeight: "bold",
        textAlign: "center"
    },
 }
)