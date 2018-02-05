import { StackNavigator } from 'react-navigation';

import HomePage from './app/HomePage';
import FirstPage from './app/screens/FirstPage'
import SecondPage from './app/screens/SecondPage'
// import Images from './app/resource/Images'

GLOBAL.afternoon = '中午好'; // 全局配置参数

// 导航器、任务栈
const BasicApp = StackNavigator({
    // 所有页面，第一个优先显示
    HomePage: { screen: HomePage },
    FirstPage: { screen: FirstPage},
    SecondPage:{ screen:SecondPage}
});

export default BasicApp;
// export {Images}
