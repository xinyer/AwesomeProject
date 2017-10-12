import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"/>
                <Text>Hello, Navigation!</Text>
            </View>
        );
    }
}

class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}


export default Navigate = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});
