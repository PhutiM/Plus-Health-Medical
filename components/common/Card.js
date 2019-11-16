import React from 'react'
import { View } from 'react-native'

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRaduis: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    marginLeft: 5,
    marginRight: 5,
    margin: 20
  }
}

export { Card }
