import React, { Component } from 'react';
import { StyleSheet,Button,  View } from 'react-native';

/**
 * Created by a-Hai on 2018/1/27.
 */

// 样式有多个属性，最好定义在外面
const styles = StyleSheet.create({
    // 容器样式
    container: {
        flex: 1, // 设置伸缩项目的伸缩样式，相当于weight,小于1表示包裹，默认1
        flexDirection: 'column', // 该属性用于指定主轴的方向，row：横向布局/column：纵向布局，默认colum
        justifyContent: 'flex-start', // 主轴上（横轴）对齐方式，默认flex-start
        backgroundColor: '#F5FCFF',
        paddingLeft: 10,
        paddingRight: 10,
    },

    // Button没有这些样式
    button: {
        height: 40,
        borderRadius: 5,
        alignItems: 'center', // 交叉轴（竖轴）上对齐方式
        justifyContent: 'center',
        backgroundColor: '#a02',
        marginTop: 5,
    },

    text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default class HomePage extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={{ height: 5 }} />
                <Button
                    style ={styles.button}
                    title="FirstPage"
                    onPress={() => {
                        navigate('FirstPage');
                    }}
                />

                <View style={{ height: 5 }} />
                <Button
                    style ={styles.button}
                    title="SecondPage"
                    onPress={() => {
                        navigate('SecondPage');
                    }}
                />

            </View>
        );
    }
}

