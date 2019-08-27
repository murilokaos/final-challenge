import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Meetups from 'pages/Meetups';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      App: createBottomTabNavigator(
        {
          Home: Meetups,
          Subscriptions: Meetups,
          Profile: Meetups,
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#FFF',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: '#9a68ed',
              height: 55,
            },
            tabStyle: {
              paddingTop: 5,
              paddingBottom: 5,
            },
          },
        }
      ),
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

export default Routes;
