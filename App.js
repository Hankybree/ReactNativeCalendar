import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, CalendarScreen, DetailsScreen } from './screens'
import orbitron from './assets/fonts/orbitron.ttf'
import montserrat from './assets/fonts/montserrat.ttf'

const Stack = createStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    orbitron,
    montserrat
  })
  
  if (!loaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Login', headerStyle: styles.header, headerTintColor: '#e2dddf' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerStyle: styles.header, headerTintColor: '#e2dddf' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerStyle: styles.header, headerTintColor: '#e2dddf' }} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1f2335'
  }
})
