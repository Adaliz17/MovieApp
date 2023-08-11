import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function MovieList({title, data}) {
  return (
    <View style={tw`mb-8 space-y-4`}>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-xl`}>
            {title}
        </Text>
      </View>
    </View>
  )
}