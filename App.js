import { View, Text } from 'react-native'
import React from 'react'
import Routes from './routes'
import container from './style'
const App = () => {
  return (
    <View style={container.container} >
      <Routes />
    </View>
  )
}

export default App