import React, { Component } from 'react'
import { Text, View, Image, Textbox } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  OnButtonPress() {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })
    fetch('https://plushealthmedical.000webhostapp.com/app_login.php', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json' // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        email: email,
        password: password
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)

        if (responseJson == 'Wrong Details') {
          this.setState({ error: '', loading: false })
          alert('Your username of password is incorrect.')
        } else {
          this.setState({ error: '', loading: false })
          this.props.navigation.navigate('HOME', { client_id: responseJson })
        }
      })
      .catch(error => {
        alert(error)
      })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }
    return <Button onPress={this.OnButtonPress.bind(this)}>Log in</Button>
  }
  //onPress={this.props.navigation.navigate('HOME')}
  //this.OnButtonPress.bind(this)
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }
  render() {
    return (
      <View>
        <Image
          source={
            __DEV__
              ? require('../src/assets/logo.png')
              : require('../src/assets/logo.png')
          }
          style={styles.logo}
        />
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 180,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  }
}

export default LoginForm
