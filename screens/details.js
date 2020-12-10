import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../styles/global'
import { DefaultButton } from '../components'

export default function DetailsScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Details</Text>
      <DefaultButton title="Home" onPress={() => {
        navigation.navigate('Home')
      }} />
    </View>
  )
}