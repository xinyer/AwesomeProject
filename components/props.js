import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2770691011,100164542&fm=27&gp=0.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}