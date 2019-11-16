// @flow

import { Platform, StatusBar } from 'react-native'

import CONSTANTS from '../utils/CONSTANTS'
import appStyles from '../styles'

export const setDefaultHeaderLayout = (
  navigation: Object,
  title: string,
  fontFamily: string = 'CircularStd-Medium',
  fontSize: ?number
): Object => ({
  title,
  headerTitleStyle: {
    fontSize: fontSize || appStyles.metrics.navigationHeaderFontSize,
    color: appStyles.colors.defaultWhite,
    fontWeight: undefined,
    fontFamily
  },
  headerTintColor: appStyles.colors.defaultWhite,
  headerStyle: {
    backgroundColor: appStyles.colors.primaryColor,
    borderBottomWidth: 0
  },
  ...Platform.select({
    android: {
      headerStyle: {
        backgroundColor: appStyles.colors.primaryColor,
        elevation: title === 'VEJA' ? 0 : 0,
        marginTop: 0
      }
    }
  }),
  headerBackTitle: null,
  borderBottomWidth: 0
})
