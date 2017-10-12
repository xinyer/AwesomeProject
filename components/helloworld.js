/**
 * demo1 HelloWorld
 */
// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('AwesomeProject', () => App);

import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorldApp extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <Text>Hello world!</Text>
        );
    }
}