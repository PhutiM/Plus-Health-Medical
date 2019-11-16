import React from 'react'
import { StatusBar } from 'react-native'
import AppTheme from '../styles'
import ApplicationNavigator from '../routes'
import fcm from '../fcm'

const initFcm = new fcm()
initFcm.init()

const App: () => Object = () => {
  return (
    <>
      <ApplicationNavigator />
    </>
  )
}

export default App
