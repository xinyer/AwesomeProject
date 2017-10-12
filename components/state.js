/**
 * demo4 state
 */

import React, {Component} from 'react'
import { Text, View} from 'react-native'

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            });
        }, this.state.delay);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='A'/>
                <Blink text='AB'/>
                <Blink text='ABC'/>
            </View>
        );
    }
}