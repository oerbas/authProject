import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class Index extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA3fx8_TEOmvg-TOah_jBVlBLzZ3FcDTiA",
            authDomain: "auth-b025e.firebaseapp.com",
            databaseURL: "https://auth-b025e.firebaseio.com",
            projectId: "auth-b025e",
            storageBucket: "auth-b025e.appspot.com",
            messagingSenderId: "880837806161"
        });
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Index