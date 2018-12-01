import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class Index extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA3fx8_TEOmvg-TOah_jBVlBLzZ3FcDTiA",
            authDomain: "auth-b025e.firebaseapp.com",
            databaseURL: "https://auth-b025e.firebaseio.com",
            projectId: "auth-b025e",
            storageBucket: "auth-b025e.appspot.com",
            messagingSenderId: "880837806161"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
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

export default Index