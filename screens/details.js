import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../styles/global'

export default function DetailsScreen({ route }) {
  const { date } = route.params
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{date}</Text>
    </View>
  )
}