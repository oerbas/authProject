import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common/Header';

class Index extends Component {
    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <Text>Open up App.js to start working on your app!</Text>
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