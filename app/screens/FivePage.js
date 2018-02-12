/**
 * Description:
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

export default class ListsPage extends Component{
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },
    item:{
        padding:10,
        fontSize:18,
        height:45
    }, one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }
});