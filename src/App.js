import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import { styles } from './style';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native</Text>
            </View>
        );
    }
}
