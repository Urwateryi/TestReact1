import { StackNavigator } from 'react-navigation';

import HomePage from './js/HomePage';
import FirstPage from './js/FirstPage'
import SecondPage from './js/SecondPage'
import ImageSource from './js/ImageSource'

GLOBAL.afternoon = '中午好'; // 全局配置参数

// 导航器、任务栈
const BasicApp = StackNavigator({
    // 所有页面，第一个优先显示
    HomePage: { screen: HomePage },
    FirstPage: { screen: FirstPage},
    SecondPage:{ screen:SecondPage}
});

export default BasicApp;
export {ImageSource}
