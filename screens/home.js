import React from 'react'
import { ScrollView, SafeAreaView, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text>Home</Text>
        <Button title="Calendar" onPress={() => {
          navigation.navigate('Calendar')
        }} />
        <Button title="Details" onPress={() => {
          navigation.navigate('Details')
        }} />
      </SafeAreaView>
    </ScrollView>
  )
}