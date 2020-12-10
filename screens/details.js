import React from 'react'
import { ScrollView, SafeAreaView, Text, Button } from 'react-native'

export default function DetailsScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text>Details</Text>
        <Button title="Home" onPress={() => {
          navigation.navigate('Home')
        }} />
      </SafeAreaView>
    </ScrollView>
  )
}