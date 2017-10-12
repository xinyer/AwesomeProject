/**
 * Flex
 */

import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexLayout extends Component {
    render() {
        return (
        <View style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{width: 50, height: 50, backgroundColor:'red'}}></View>
                <View style={{width: 50, height: 50, backgroundColor:'green'}}></View>
                <View style={{width: 50, height: 50, backgroundColor:'yellow'}}></View>
            </View>

            <View style={{flex:1, flexDirection: 'row', alignItems: 'stretch'}}>
                <View style={{width: 50, backgroundColor:'red'}}></View>
                <View style={{width: 50, backgroundColor:'green'}}></View>
                <View style={{width: 50, backgroundColor:'yellow'}}></View>
            </View>
        </View>
        );
    }
}