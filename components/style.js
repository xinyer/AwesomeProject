/**
 * Demo style
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>red</Text>
                <Text style={styles.bigblue}>big blue</Text>
                <Text style={[styles.bigblue, styles.red]}>big blue then red</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
});

