import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import OnboardingIntro from '../screens/onboarding-into'
import Profile from '../screens/profile'

import MainStack from './mainStack'

export const ROUTE_NAMES = {
  ONBOARDING_INTRO: 'ONBOARDING_INTRO',
  LOGIN: 'LOGIN',
  MAIN_STACK: 'MAIN_STACK',
  PROFILE: 'PROFILE'
}

const InitialStack = createSwitchNavigator(
  {
    [ROUTE_NAMES.ONBOARDING_INTRO]: {
      screen: OnboardingIntro
    },
    [ROUTE_NAMES.LOGIN]: {
      screen: Profile
    },
    [ROUTE_NAMES.MAIN_STACK]: {
      screen: MainStack
    }
  },
  {
    initialRouteName: ROUTE_NAMES.MAIN_STACK
  }
)

const AppContainer = createAppContainer(InitialStack)

export default AppContainer
