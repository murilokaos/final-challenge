import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from 'pages/Sign/SignIn';
import SignUp from 'pages/Sign/SignUp';

import Dashboard from 'pages/Dashboard';
import Subscriptions from 'pages/Subscriptions';
import Profile from 'pages/Profile';

import { secondary } from 'services/utils/colors';

const Routes = (isLoggedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: secondary,
                height: 64,
                borderTopColor: 'transparent',
              },
              tabStyle: {
                paddingTop: 5,
                paddingBottom: 10,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isLoggedIn ? 'App' : 'Auth',
      }
    )
  );

export default Routes;
