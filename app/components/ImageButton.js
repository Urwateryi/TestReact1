/**
 * Description:图片按钮
 *
 * Author: zoey
 * Time: 2018/2/6 0006
 * E-mail: 807861340@qq.com
 */
import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

export default class ImageButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
                {this._renderImg()}
            </TouchableOpacity>
        )
    }
    _renderImg(){
        if(this.props.defaultSource){
            return (
                <Image
                    style={this.props.style}
                    source={this.props.defaultSource}
                >
                    <Image
                        style={this.props.style}
                        source={this.props.source}
                    >
                        {this.props.children}
                    </Image>
                </Image>
            )
        }else {
            return (
                <Image
                    style={this.props.style}
                    source={this.props.source}
                >
                    {this.props.children}
                </Image>
            )
        }
    }
}

//导出
module.exports=ImageButton;