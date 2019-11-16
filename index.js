import React from 'react'
import { AppRegistry } from 'react-native'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { store, persistor } from './src/store'
import App from './src/App'
import { name as appName } from './app.json'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider
          settings={{ icon: props => <MaterialIcon {...props} /> }}
        >
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Main)
