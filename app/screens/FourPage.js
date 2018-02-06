/**
 * Description:第四页
 *
 * Author: zoe
 * Time: 2018/2/6 0006
 * E-mail: 807861340@qq.com
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {Images} from "../resource";

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.tag}>姓名</Text>
                    <Text style={styles.content}>Zoe</Text>
                </View>

                <Text style={styles.view}/>

                <View style={styles.info}>
                    <Text style={styles.tag}>家庭住址</Text>
                    <Text style={styles.content}>成都市天府三街峰会中心2栋6楼</Text>
                </View>

                <View style={styles.nani}>
                    <Image source={Images.home_button.ic_info_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_search_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_create_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_msg_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_my_select} style={styles.pics}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent:'flex-start',
        backgroundColor: '#f2f2f2',
    }, nani: {
        flex:1,
        flexDirection:'row',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'flex-end',//定制副轴
        marginBottom:10
    }, info: {
        height:50,
        flexDirection:'row',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'center',//定制副轴
        backgroundColor: '#ffffff',
    },tag: {
        flex:0.5,
        fontSize: 15,
        paddingLeft:20,
        textAlign: 'left',
        color: '#333333',
    },content: {
        flex:1,
        fontSize: 15,
        paddingRight:20,
        textAlign: 'right',
        color: '#999999',
    },view: {
        height: 1,
        color: '#333333',
    },three: {
        fontSize: 80,
        textAlign: 'center',
        color: '#333333',
    }, four: {
        fontSize: 5,
        textAlign: 'center',
        color: '#333333',
    }
    , five: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }
    , six: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }
    , seven: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    },pic:{
        width:40,
        height:40
    }
});