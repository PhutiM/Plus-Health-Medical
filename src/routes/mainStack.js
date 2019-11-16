// @flow

import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer } from 'react-navigation'

import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator
} from 'react-navigation-tabs'

import Settings from '../screens/profile/client'
import HomeRoutes from '../screens/home/index'
import NotificationScreen from '../screens/notification/index'

import { setDefaultHeaderLayout } from '../routes/headerUtils'

import isEqualsOrLargestThanIphoneX from '../utils/isEqualsOrLargestThanIphoneX'
import appStyles from '../styles'

export const ROUTE_NAMES = {
  HOME: 'HOME',
  SETTINGS: 'SETTINGS'
}

type Props = {
  tintColor: string
}

const getTabIcon = (icon: string): Object => ({ tintColor }: Props) => (
  <Icon color={tintColor} name={icon} size={16} />
)

const ApplicationTabs = createBottomTabNavigator(
  {
    [ROUTE_NAMES.HOME]: {
      screen: HomeRoutes,
      navigationOptions: {
        tabBarIcon: getTabIcon('home')
      }
    },
    [ROUTE_NAMES.SETTINGS]: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: getTabIcon('build')
      }
    }
  },
  {
    initialRouteName: ROUTE_NAMES.HOME,
    lazy: true,
    headerMode: 'screen',
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      style: {
        paddingBottom: isEqualsOrLargestThanIphoneX() ? 30 : 0,
        backgroundColor: appStyles.colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      inactiveTintColor: appStyles.colors.gray,
      activeTintColor: appStyles.colors.primaryColor
    }
  }
)

const AppContainer = createAppContainer(ApplicationTabs)

export default AppContainer
