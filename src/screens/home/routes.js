import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { setDefaultHeaderLayout } from 'src/routes/headerUtils'

import CONSTANTS from 'src/utils/CONSTANTS'
import Home from './index'

export const ROUTE_NAMES = {
  HOME: 'HOME'
}

const RootStack = createStackNavigator(
  {
    [ROUTE_NAMES.HOME]: {
      screen: Home,
      navigationOptions: ({ navigation }) =>
        setDefaultHeaderLayout(navigation, 'Welcome!!', 'Modesta-Script', 27)
    }
  },
  {
    initialRouteName: ROUTE_NAMES.HOME,
    mode: Platform.OS === 'ios' ? 'card' : 'modal',
    headerMode: 'screen'
  }
)

RootStack.navigationOptions = ({ navigation }) => {
  const tabBarVisible = navigation.state.index <= 0

  return {
    tabBarVisible
  }
}

export default RootStack
