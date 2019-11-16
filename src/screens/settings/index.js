import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Headline } from 'react-native-paper'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Headline>Settings Screen</Headline>
        </View>
      </ScrollView>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Settings'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  }
})
