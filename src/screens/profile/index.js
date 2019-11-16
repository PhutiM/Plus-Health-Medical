import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native'

import { Headline } from 'react-native-paper'

class Profile extends Component {
  state = { date: '', time: '', status: '' }

  componentWillMount() {
    const { navigation } = this.props
    this.setState({
      date: navigation.getParam('date', 'NO-ID'),
      status: navigation.getParam('status', 'NO-ID'),
      time: navigation.getParam('time', 'NO-ID'),
      client_id: navigation.getParam('client_id', 'NO-ID')
    })
  }
  updateAppointment() {
    const { status, date, time, client_id } = this.state
    this.setState({ error: '', loading: true })
    fetch(
      'https://plushealthmedical.000webhostapp.com/appointment_update.php',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json' // <-- Specifying the Content-Type
        }),
        body: JSON.stringify({
          client_id: client_id,
          status: status,
          date: date,
          time: time
        }) // <-- Post parameters
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson)
      })
      .catch(error => {
        alert(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Headline style={styles.test}>Appointment Details</Headline>

        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.date}
          onChangeText={date => this.setState({ date })}
        ></TextInput>
        <TextInput
          style={styles.materialIconTextbox2}
          value={this.state.time}
          onChangeText={time => this.setState({ time })}
        ></TextInput>
        <TextInput
          style={styles.materialIconTextbox2}
          value={this.state.status}
          onChangeText={status => this.setState({ status })}
        ></TextInput>
        <Text></Text>

        <Button
          title="Update Details"
          color="#d13466"
          onPress={this.updateAppointment.bind(this)}
          style={styles.Button}
        ></Button>
      </View>
    )
  }
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 40
  },

  test: {
    justifyContent: 'center'
  },
  materialIconTextbox: {
    height: 40.86,
    margin: 10,
    borderRadius: 5,
    borderColor: 'rgba(167,169,172,1)',
    borderWidth: 1
  },

  materialIconTextbox2: {
    height: 40.86,
    margin: 10,
    borderRadius: 5,
    borderColor: 'rgba(167,169,172,1)',
    borderWidth: 1
  },

  Button: {
    margin: 10,
    borderRadius: 5,
    borderColor: 'rgba(167,169,172,1)',
    borderWidth: 1,
    bottom: 0
  }
})
