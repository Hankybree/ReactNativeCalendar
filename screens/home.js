import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import globalStyles from '../styles/global'
import { vw } from '../services/screen'
import logo from '../assets/images/icon.png'
import { DefaultButton } from '../components'

export default function HomeScreen({ navigation }) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.ui}>
        <Text style={styles.text}>Here is a dummy login page. Press the button to enter</Text>
        <DefaultButton title="Calendar" onPress={() => {
          navigation.navigate('Calendar')
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  logo: {
    width: vw(80),
    height: vw(80)
  },
  ui: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#e2dddf'
  }
})