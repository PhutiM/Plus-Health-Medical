import * as React from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import Friend from '../screens/home'
import Chat from '../screens/login'

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'friend', title: 'Friend', icon: 'accessibility' },
      { key: 'chat', title: 'Chat', icon: 'message' }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    friend: Friend,
    chat: Chat
  })

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={{ backgroundColor: '#00b5ec' }}
      />
    )
  }
}
