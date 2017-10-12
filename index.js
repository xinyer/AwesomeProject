/**
 * demo1 HelloWorld
 */
// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('AwesomeProject', () => App);

// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';
//
// class HelloWorldApp extends Component {
//     render() {
//         return (
//             <Text>Hello world!</Text>
//         );
//     }
// }
//
// // 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);

/**
 * demo2 props
 */
// import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';
//
// class Bananas extends Component {
//     render() {
//         let pic = {
//             uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2770691011,100164542&fm=27&gp=0.jpg'
//         };
//         return (
//             <Image source={pic} style={{width: 193, height: 110}} />
//         );
//     }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);


/**
 * demo3 props
 */
// import React, {Component} from 'react'
// import {AppRegistry, View, Text} from 'react-native'
//
// class Greeting extends Component {
//     render() {
//         return (
//             <Text>Hello {this.props.name}</Text>
//         );
//     }
// }
//
// class LotsOfGreetings extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//                 <Greeting name="John"/>
//                 <Greeting name="Smith"/>
//                 <Greeting name="Bosh"/>
//             </View>
//         );
//     }
// }
//
// AppRegistry.registerComponent("AwesomeProject", () => LotsOfGreetings);

/**
 * demo4 state
 */

// import React, {Component} from 'react'
// import {AppRegistry, Text, View} from 'react-native'
//
// class Blink extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {showText: true};
//
//         setInterval(() => {
//             this.setState(previousState => {
//                 return {showText: !previousState.showText}
//             });
//         }, this.state.delay);
//     }
//
//     render() {
//         let display = this.state.showText ? this.props.text : ' ';
//         return (
//             <Text>{display}</Text>
//         );
//     }
// }
//
// class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Blink text='A'/>
//                 <Blink text='AB'/>
//                 <Blink text='ABC'/>
//             </View>
//         );
//     }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);

/**
 * Demo style
 */

// import React, {Component} from 'react'
// import {AppRegistry, View, Text, StyleSheet} from 'react-native'
//
// class LotsOfStyles extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={styles.red}>red</Text>
//                 <Text style={styles.bigblue}>big blue</Text>
//                 <Text style={[styles.bigblue, styles.red]}>big blue then red</Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     red: {
//         color: 'red'
//     }
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);


/**
 * width & height
 */

// import React, {Component} from 'react';
// import {AppRegistry, View} from 'react-native';
//
// class FixedDimensions extends Component {
//
//     render() {
//         return (
//             <View>
//                 <View style={{width: 50, height:50, backgroundColor:'red'}} />
//                 <View style={{width: 100, height:100, backgroundColor:'green'}} />
//                 <View style={{width: 150, height:150, backgroundColor:'blue'}} />
//             </View>
//         );
//     }
// }
//
// class FlexDimensions extends Component {
//
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 <View style={{flex:1, backgroundColor:'red'}} />
//                 <View style={{flex:1, backgroundColor:'green'}} />
//                 <View style={{flex:1, backgroundColor:'blue'}} />
//             </View>
//         );
//     }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensions);

/**
 * Flex
 */

// import React, {Component} from 'react';
// import {View, AppRegistry} from 'react-native';
//
// class FlexLayout extends Component {
//     render() {
//         return (
//         <View style={{flex:1}}>
//             <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//                 <View style={{width: 50, height: 50, backgroundColor:'red'}}></View>
//                 <View style={{width: 50, height: 50, backgroundColor:'green'}}></View>
//                 <View style={{width: 50, height: 50, backgroundColor:'yellow'}}></View>
//             </View>
//
//             <View style={{flex:1, flexDirection: 'row', alignItems: 'stretch'}}>
//                 <View style={{width: 50, backgroundColor:'red'}}></View>
//                 <View style={{width: 50, backgroundColor:'green'}}></View>
//                 <View style={{width: 50, backgroundColor:'yellow'}}></View>
//             </View>
//         </View>
//         );
//     }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => FlexLayout);

/**
 * TextInput
 */
// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
//
// class PizzaTranslator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {text: ''};
//     }
//
//     render() {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

/**
 * ScrollView
 */
// import React, { Component } from 'react';
// import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'
//
// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//     render() {
//         return(
//             <ScrollView>
//                 <Text style={{fontSize:48}}>Scroll me plz</Text>
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Text style={{fontSize:96}}>If you like</Text>
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Text style={{fontSize:96}}>Scrolling down</Text>
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Text style={{fontSize:96}}>What's the best</Text>
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Text style={{fontSize:96}}>Framework around?</Text>
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Image source={require('./img/favicon.jpg')} />
//                 <Text style={{fontSize:80}}>React Native</Text>
//             </ScrollView>
//         );
//     }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockedMe);

import React, {Component} from 'react';
import {AppRegistry, Text, Button, View} from 'react-native';
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


export const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);

















