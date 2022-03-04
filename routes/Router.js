import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "../comp/HomePage/HomePage";
import EachMusic from "../comp/eachMusic/EachMusic";
import Menu from "../comp/Tools/Menu";

const screen ={
    HomePage: {
        screen: HomePage
    },
    EachMusic:{
        screen: EachMusic
    },
    Menu:{
        screen: Menu
    }
}
const HomeStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerShown: true,
        headerStyle: { backgroundColor: 'none', color: 'white' }
    }
});

export default createAppContainer(HomeStack)