import { StackNavigator } from 'react-navigation';

// import HomePage from './app/IndexPage';
import HomePage from './app/HomePage';
import FirstPage from './app/screens/FirstPage'
import SecondPage from './app/screens/SecondPage'
import ThirdPage from './app/screens/ThirdPage'
import FourPage from './app/screens/FourPage'
import FivePage from "./app/screens/FivePage";
import TestUI from "./app/screens/TestUI";

// 导航器、任务栈
const BasicApp = StackNavigator({
    // 所有页面，第一个优先显示
    HomePage: { screen: HomePage },
    FirstPage: { screen: FirstPage},
    SecondPage:{ screen:SecondPage},
    ThirdPage:{ screen:ThirdPage},
    FourPage:{ screen:FourPage},
    FivePage:{screen:FivePage},
    TestUI:{screen:TestUI}
});

export default BasicApp;
