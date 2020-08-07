import React from 'react';
import { image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../Screens/Welcome';
/*import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
*/
import { theme } from '../constants';
import SafeAreaView from 'react-native-safe-area-view';

const screens = createStackNavigator({
    Welcome,
    /*Login,
    Explore,
    Browse,
    Product,
    Settings,
    */
}, {
    dafaultNavigationOptions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

export default createAppContainer(screens);