/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/2/26 0026
 * E-mail: 807861340@qq.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import TextPage from '../demopage/TextPage'

export default class MainMsg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MainMsg</Text>
                <PageTop/>
            </View>
        );
    }
}

class PageTop extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button title='TextPage' onPress={() => navigate.navigate('TextPage')}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent: 'flex-start',
        backgroundColor: '#f2f2f2',
    }, text: {
        fontSize: 50,
        textAlign: 'center',
        color: '#333333',
    }
})