import { View, Text } from 'react-native'
import React from 'react'
import CartaoApresentacao from './src/components/CartaoApresentacao'


const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CartaoApresentacao />
    </View>
  )
}

export default App