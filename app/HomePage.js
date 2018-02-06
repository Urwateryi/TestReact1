import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';

import {Images} from "./resource";
import ImageButton from "./components/ImageButton";

/**
 * Description:首页
 *
 * Author: zoe
 * Time: 2018/2/6 0006
 * E-mail: 807861340@qq.com
 */
export default class HomePage extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.nani}>
                    <ImageButton style={styles.pic} source={Images.home_button.ic_info_select}
                        onPress={()=>{
                            navigate('FirstPage');
                    }}/>

                    <ImageButton style={styles.pic} source={Images.home_button.ic_search_select}
                                 onPress={()=>{
                                     navigate('SecondPage');
                                 }}/>

                    <ImageButton style={styles.pic} source={Images.home_button.ic_create_select}
                                 onPress={()=>{
                                     navigate('ThirdPage');
                                 }}/>

                    <ImageButton style={styles.pic} source={Images.home_button.ic_msg_select}
                                 onPress={()=>{
                                     navigate('FourPage');
                                 }}/>

                    <ImageButton style={styles.pic} source={Images.home_button.ic_my_select}
                                 onPress={()=>{
                                     navigate('FourPage');
                                 }}/>
                </View>
            </View>
        );
    }
}

// 样式有多个属性，最好定义在外面
const styles = StyleSheet.create({
    // 容器样式
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
    },pic:{
        width:40,
        height:40
    }
});
