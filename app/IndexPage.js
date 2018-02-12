/**
 * Description:引导页
 *
 * Author: zoe
 * Time: 2018/2/11 0011
 * E-mail: 807861340@qq.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text
} from 'react-native';

export default class IndexPage extends Component{
    render() {
        var data = [];
        var strList=['Text','Image','Input', 'Button','ScrollView', '长列表FlatList','分组列表SectionList','图文列表','网络请求','动画','自定义控件','聚合页面','页面刷新','与Android交互','与iOS交互','打包'];
        for (var i = 0; i < strList.length; i++) {
            data.push({key: strList[i]});
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    item:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        fontSize:18,
        backgroundColor:'white',
        height:55,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    }, one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }
});