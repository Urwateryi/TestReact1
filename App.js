import { StackNavigator } from 'react-navigation';

// import HomePage from './app/IndexPage';
import HomePage from './app/HomePage';
import TextPage from './app/screens/demopage/TextPage'
import SecondPage from './app/screens/demopage/SecondPage'
import ThirdPage from './app/screens/demopage/ThirdPage'
import FourPage from './app/screens/demopage/FourPage'
import FivePage from "./app/screens/demopage/FivePage";
import TestUI from "./app/screens/demopage/TestUI";

import MainDemo from "./app/screens/demopage/MainDemo";
import MainCreate from './app/screens/createpage/MainCreate'
import MainFound from './app/screens/foundpage/MainFound'
import MainMsg from './app/screens/msgpage/MainMsg'
import MainMine from './app/screens/minepage/MainMine'

// 导航器、任务栈
const BasicApp = StackNavigator({
    // 所有页面，第一个优先显示
    HomePage: { screen: HomePage },
    TextPage: { screen: TextPage},
    SecondPage:{ screen:SecondPage},
    ThirdPage:{ screen:ThirdPage},
    FourPage:{ screen:FourPage},
    FivePage:{screen:FivePage},


});

export default BasicApp;
