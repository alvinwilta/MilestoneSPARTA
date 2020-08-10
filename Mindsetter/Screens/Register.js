import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/auth'

export default class App extends Component {

    constructor(props){
        super(props)

        this.state = ({
            email : '',
            password : ''
        })
    }

    componentDidMount() {
        this.checkIfLoggedIn();
    }


    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(
            function(user){
                if(user){
                }
                else{
                }
            }.bind(this)
        );
    };


    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    };

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken, googleUser.accessToken);
                // Sign in with credential from the Google user.
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
            }
        }.bind(this));
    };

    signInWithGoogleAsync = async () => {
        try {
            const result = await Expo.Google.logInAsync({

                androidClientId : '906384562227-j6p5lkkck18f2bcbdrnafn1p73oms3ba.apps.googleusercontent.com',
                scopes: ['profile', 'email']

            });
            if (result.type === 'success'){
                return result.accessToken;
            }
            else{
                return {cancelled: True};

            }
        }
        catch(error) {
            return {error: True}
        }
    };

    SignUpUser = (email, password) =>{
        try{
            if(password.length < 8){
                alert("Please use password with at least 8 characters");
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error){
            console.log(error.toString());
        }
    }

    valid = (email, password) =>{
        if( email === "" || email === null || password.length < 8){
            return false;
        }
        else{
            return true;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Welcome to Mindsetter</Text>

                <TouchableOpacity style={styles.textinput}
                                  onPress = {() => this.signInWithGoogleAsync()}>
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
                                      if(this.valid(this.state.email, this.state.password)){
                                          this.props.navigation.navigate('Commitment');
                                      }
                                      else{
                                          alert("Please recheck your inputs");
                                      }
                                  }}
                >
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



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: "#2C94A6",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 150
    },
    header: {
        fontSize: 40,
        paddingLeft: 10,
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
        paddingLeft: 15,
        marginRight: 15,
        marginBottom: 10

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
        borderRadius: 20
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
});