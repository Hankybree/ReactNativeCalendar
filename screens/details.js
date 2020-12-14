import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../styles/global'

export default function DetailsScreen({ route }) {
  const { date, lightStyle } = route.params
  return (
    <View style={[lightStyle ? globalStyles.light : globalStyles.dark,globalStyles.container]}>
      <Text style={globalStyles.text}>{date}</Text>
    </View>
  )
}