/**
 * Description:第三页
 *
 * Author: zoey
 * Time: 2018/2/6 0006
 * E-mail: 807861340@qq.com
 */
import React, { Component } from 'react';
import {TextInput} from 'react-native';

export default class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }

    render() {
        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}
