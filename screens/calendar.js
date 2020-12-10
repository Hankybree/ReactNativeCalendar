import React from 'react'
import { ScrollView, SafeAreaView, Text, Button } from 'react-native'

export default function CalendarScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text>Calendar</Text>
        <Button title="Home" onPress={() => {
          navigation.navigate('Home')
        }} />
      </SafeAreaView>
    </ScrollView>
  )
}