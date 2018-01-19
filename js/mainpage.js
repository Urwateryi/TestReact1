import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        let pic = {
            uri: 'http://d10.paixin.com/v1.0.2/thumbs/1128150/141752326/staff_1024.jpg'
        };
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello yiyi!</Text>
                <Greeting name='zoey'/>

                <IScrolledDownAndWhatHappenedNextShockedMe />
                <Image source={pic} style={styles.pics}/>
            </View>
        );
    }
}

//ES6的写法
class Greeting extends Component {
    render() {
        return (<Text style={styles.welcome}>{this.props.name}</Text>);
    }
}

class FlexDirectionBasics extends Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};


class JustifyContentBasics extends Component {
    render() {
        return (
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render() {
        let pic = {
            uri: './img/bg.jpg'
        };
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Image source={require('./img/bg.jpg')} style={styles.pics}/>
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }, welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }, pics: {
        flex: 1,
        width: 300,
        height: 300,
    }
});