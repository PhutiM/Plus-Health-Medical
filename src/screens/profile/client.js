import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native'

import { Headline } from 'react-native-paper'

class Client extends Component {
  state = {
    name: '',
    surname: '',
    address: '',
    cell: '',
    email: '',
    password: ''
  }

  updateClient() {
    const { name, surname, address, cell, email, password } = this.state
    const { navigation } = this.props
    const id = navigation.getParam('client_id', '')

    fetch('https://plushealthmedical.000webhostapp.com/client_update.php', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json' // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        client_id: id,
        name: name,
        surname: surname,
        address: address,
        cell: cell,
        email: email,
        password: password
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson)
      })
      .catch(error => {
        alert(error)
      })
  }

  componentDidMount() {
    const { navigation } = this.props
    const data = navigation.getParam('client_data', '')
    console.log('address', data[0].address)
    this.setState({
      name: data[0].name,
      surname: data[0].surname,
      address: data[0].address,
      cell: data[0].cell,
      email: data[0].email,
      password: data[0].password
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Headline>Client Detail</Headline>
        <Text style={styles.materialIconText}>Name</Text>
        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        ></TextInput>
        <Text style={styles.materialIconText}>Surname</Text>
        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.surname}
          onChangeText={surname => this.setState({ surname })}
        ></TextInput>
        <Text style={styles.materialIconText}>Cell</Text>

        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.cell}
          onChangeText={cell => this.setState({ cell })}
        ></TextInput>
        <Text style={styles.materialIconText}>Address</Text>
        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.address}
          onChangeText={address => this.setState({ address })}
        ></TextInput>
        <Text style={styles.materialIconText}>Email Address</Text>

        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        ></TextInput>
        <Text style={styles.materialIconText}>Password</Text>

        <TextInput
          style={styles.materialIconTextbox}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        ></TextInput>

        <Button
          title="Update Client"
          onPress={this.updateClient.bind(this)}
          color="#d13466"
          style={styles.Button}
        ></Button>
      </View>
    )
  }
}

export default Client

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 20
  },

  materialIconText: {
    margin: 5
  },

  materialIconTextbox: {
    margin: 2,
    height: 40.86,
    borderRadius: 5,
    borderColor: 'rgba(167,169,172,1)',
    borderWidth: 1
  },

  materialIconTextbox2: {
    margin: 10,
    height: 40.86,
    position: 'absolute',
    borderRadius: 5,
    borderColor: 'rgba(167,169,172,1)',
    borderWidth: 1
  },

  Button: {
    margin: 10,
    height: 40.86,
    borderRadius: 5,
    borderColor: 'rgba(167,169,172,1)',
    borderWidth: 1,
    color: '#690c38',
    backgroundColor: '#690c38'
  }
})
