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

import {
  Button,
  Avatar,
  Card,
  Title,
  Paragraph,
  IconButton
} from 'react-native-paper'

import fcm from '../../fcm'

const regFcm = new fcm()

export default function NotificationScreen() {
  return (
    <Card>
      <Card.Content>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={props => <Avatar.Icon {...props} icon="message" />}
        />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
}

NotificationScreen.navigationOptions = {
  header: null
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
    alignItems: 'center'
    // marginHorizontal: 50
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 20
  },
  button: {
    color: 'red'
  }
})
