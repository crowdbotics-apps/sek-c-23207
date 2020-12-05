import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings182254Navigator from '../features/Settings182254/navigator';
import UserProfile182247Navigator from '../features/UserProfile182247/navigator';
import Settings182246Navigator from '../features/Settings182246/navigator';
import Settings182244Navigator from '../features/Settings182244/navigator';
import SignIn2182242Navigator from '../features/SignIn2182242/navigator';
import Settings182240Navigator from '../features/Settings182240/navigator';
import UserProfile182233Navigator from '../features/UserProfile182233/navigator';
import Settings182232Navigator from '../features/Settings182232/navigator';
import Settings182230Navigator from '../features/Settings182230/navigator';
import SignIn2182228Navigator from '../features/SignIn2182228/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings182254: { screen: Settings182254Navigator },
UserProfile182247: { screen: UserProfile182247Navigator },
Settings182246: { screen: Settings182246Navigator },
Settings182244: { screen: Settings182244Navigator },
SignIn2182242: { screen: SignIn2182242Navigator },
Settings182240: { screen: Settings182240Navigator },
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
