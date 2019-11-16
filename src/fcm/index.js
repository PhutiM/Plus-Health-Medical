import { PushNotificationIOS, View } from 'react-native'
import Analytics from '@aws-amplify/analytics'
import PushNotification from '@aws-amplify/pushnotification'
import aws_exports from '../../aws-exports'
import { NativeModules, Alert } from 'react-native'
import { showMessage, hideMessage } from 'react-native-flash-message'
import React from 'react'

export default class FCM {
  constructor() {}

  init() {
    console.log('fcm initialized')
    // PushNotification need to work with Analytics
    Analytics.configure(aws_exports)

    // get the notification data when notification is received
    PushNotification.onNotification(notification => {
      // Note that the notification object structure is different from Android and IOS
      //alert('in app notification', notification)

      Alert.alert('In app Notification', notification.body, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed', notification),
          style: 'cancel'
        }
      ])

      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      //notification.finish(PushNotificationIOS.FetchResult.NoData)
    })

    // get the registration token
    // This will only be triggered when the token is generated or updated.
    PushNotification.onRegister(token => {
      console.log('in app registration', token)
    })

    // get the notification data when notification is opened
    PushNotification.onNotificationOpened(notification => {
      console.log('the notification is opened', notification)
    })
  }

  register() {
    console.log(
      NativeModules.RNPushNotification.getToken(token => console.log(token))
    )
    PushNotification.configure(aws_exports)
  }
}
