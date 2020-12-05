import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile182233Navigator from '../features/UserProfile182233/navigator';
import Settings182232Navigator from '../features/Settings182232/navigator';
import Settings182230Navigator from '../features/Settings182230/navigator';
import SignIn2182228Navigator from '../features/SignIn2182228/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile182233: { screen: UserProfile182233Navigator },
Settings182232: { screen: Settings182232Navigator },
Settings182230: { screen: Settings182230Navigator },
SignIn2182228: { screen: SignIn2182228Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
