import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window')

export default function PersonScreen() {
  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  )
}