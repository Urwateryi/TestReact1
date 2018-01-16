/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello yiyi!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }, welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    }
});