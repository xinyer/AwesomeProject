

// AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);

import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Button,
    StyleSheet
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HelloWorldApp from './components/helloworld';
import Props1 from './components/props';
import Props2 from './components/props2';
import State from './components/state';
import Style from './components/style';
import Size from './components/size';
import Flex from './components/flex';
import TextInput from './components/textinput';
import MyScrollView from './components/scrollview';
import Navigate from './components/navigate';

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        return(
            <ScrollView>
                <Button onPress={() => navigate('HelloWorld')} title={"Hello World"} style={styles.button}/>
                <Button onPress={() => navigate('Props1')} title={"Props1"} style={styles.button}/>
                <Button onPress={() => navigate('Props2')} title={"Props2"} />
                <Button onPress={() => navigate('State')} title={"State"} />
                <Button onPress={() => navigate('Style')} title={"Style"} />
                <Button onPress={() => navigate('Size')} title={"Size"} />
                <Button onPress={() => navigate('Flex')} title={"Flex"} />
                <Button onPress={() => navigate('TextInput')} title={"TextInput"} />
                <Button onPress={() => navigate('MyScrollView')} title={"ScrollView"} />
                <Button onPress={() => navigate('Navigate')} title={"Navigate"} />
            </ScrollView>
        );
    }
}


export const SimpleApp = StackNavigator({
    Home: {screen: Home},
    HelloWorld: {screen: HelloWorldApp},
    Props1: {screen: Props1},
    Props2: {screen: Props2},
    State: {screen: State},
    Style: {screen: Style},
    Size: {screen: Size},
    Flex: {screen: Flex},
    TextInput: {screen: TextInput},
    MyScrollView: {screen: MyScrollView},
    Navigate: {screen: Navigate}

});

const styles = StyleSheet.create({
    button: {
        marginTop:10,
        color: 'red'
    }
});

AppRegistry.registerComponent('AwesomeProject', ()=> SimpleApp);

















