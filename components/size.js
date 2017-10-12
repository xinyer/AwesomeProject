/**
 * width & height
 */

import React, {Component} from 'react';
import {View} from 'react-native';

export default class FixedDimensions extends Component {

    render() {
        return (
            <View>
                <View style={{width: 50, height:50, backgroundColor:'red'}} />
                <View style={{width: 100, height:100, backgroundColor:'green'}} />
                <View style={{width: 150, height:150, backgroundColor:'blue'}} />
            </View>
        );
    }
}

class FlexDimensions extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'red'}} />
                <View style={{flex:1, backgroundColor:'green'}} />
                <View style={{flex:1, backgroundColor:'blue'}} />
            </View>
        );
    }
}
//
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensions);
