import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import TestPage from '../containers/TestPage'
import AfterTestPage from '../../routes/mainStack'
import Login from '../login/'
import Landing from '../home/'
import Edit from '../profile/'
import Client from '../profile/client'

import { setDefaultHeaderLayout } from '../../routes/headerUtils'

export const ROUTE_NAMES = {
  TESTPAGE: 'TESTPAGE',
  AFTERTESTPAGE: 'AFTERTESTPAGE',
  HOME: 'HOME',
  LOGIN: 'LOGIN',
  EDIT: 'EDIT',
  CLIENT: 'CLIENT'
}

const AppNavigator = createStackNavigator(
  {
    [ROUTE_NAMES.TESTPAGE]: {
      screen: TestPage
    },
    [ROUTE_NAMES.AFTERTESTPAGE]: {
      screen: AfterTestPage
    },
    [ROUTE_NAMES.LOGIN]: {
      screen: Login,
      navigationOptions: ({ navigation }) =>
        setDefaultHeaderLayout(
          navigation,
          '       Welcome to Plus Health Medical',
          'Modesta-Script',
          0
        )
    },
    [ROUTE_NAMES.HOME]: {
      screen: Landing,
      navigationOptions: ({ navigation }) =>
        setDefaultHeaderLayout(
          navigation,
          'Plus Health Medical',
          'Modesta-Script',
          0
        )
    },
    [ROUTE_NAMES.CLIENT]: {
      screen: Client,
      navigationOptions: ({ navigation }) =>
        setDefaultHeaderLayout(navigation, 'CLIENT DETAIL', 'Modesta-Script', 0)
    },
    [ROUTE_NAMES.EDIT]: {
      screen: Edit,
      navigationOptions: ({ navigation }) =>
        setDefaultHeaderLayout(navigation, 'Edit Data', 'Modesta-Script', 0)
    }
  },
  {
    initialRouteName: ROUTE_NAMES.LOGIN,
    navigationOptions: {},
    headerMode: 'screen'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
