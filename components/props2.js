/**
 * demo3 props
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="John"/>
                <Greeting name="Smith"/>
                <Greeting name="Bosh"/>
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}

