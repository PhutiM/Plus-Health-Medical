import React, { Component } from 'react'
import { StyleSheet, View, Text, ToucableOpacity } from 'react-native'

import { DataTable, Button } from 'react-native-paper'
import { Headline } from 'react-native-paper'
export default class ExampleTwo extends Component {
  state = {
    data: [],
    client_id: ''
  }

  clientDetial() {
    const { navigation } = this.props
    const id = navigation.getParam('client_id', 'NO-ID')

    fetch('https://plushealthmedical.000webhostapp.com/select_client.php', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json' // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        client_id: id
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        this.props.navigation.navigate('CLIENT', {
          client_data: responseJson.data,
          client_id: id
        })
      })
      .catch(error => {
        alert(error)
      })
  }

  componentDidMount() {
    const { navigation } = this.props

    const id = navigation.getParam('client_id', 'NO-ID')

    this.setState({
      error: '',
      loading: true,
      client_id: id
    })

    fetch(
      'https://plushealthmedical.000webhostapp.com/select_appointment.php',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json' // <-- Specifying the Content-Type
        }),
        body: JSON.stringify({
          client_id: id
        }) // <-- Post parameters
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.data,
          client_id: id
        })
      })
      .catch(error => {
        alert(error)
      })
  }

  render() {
    const { navigation } = this.props

    const client_id = navigation.getParam('client_id', 'NO-ID')

    const initialArr = this.state.data

    return (
      <View style={styles.container}>
        <Headline>Appointments</Headline>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Time</DataTable.Title>
            <DataTable.Title numeric>Status</DataTable.Title>
            <DataTable.Title numeric>Action</DataTable.Title>
          </DataTable.Header>
          {initialArr.map((datatable, key) => (
            <DataTable.Row>
              <DataTable.Cell>{datatable.appointment_date}</DataTable.Cell>
              <DataTable.Cell numeric>{datatable.time}</DataTable.Cell>
              <DataTable.Cell numeric>{datatable.status}</DataTable.Cell>

              <DataTable.Cell numeric>
                {' '}
                <Text
                  style={styles.textStyle}
                  onPress={() =>
                    this.props.navigation.navigate('EDIT', {
                      time: datatable.time,
                      date: datatable.appointment_date,
                      status: datatable.status,
                      client_id: client_id
                    })
                  }
                >
                  {' '}
                  EDIT
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <Button onPress={this.clientDetial.bind(this)} style={styles.Button}>
          Edit My Personal Details
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  textStyle: { color: '#d13466' },
  Button: { top: '60%' }
})
