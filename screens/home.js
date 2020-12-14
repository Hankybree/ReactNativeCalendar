import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Switch } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { fadeIn } from '../styles/animations'
import globalStyles from '../styles/global'
import { vw } from '../services/screen'
import logo from '../assets/images/icon.png'
import { DefaultButton } from '../components'

export default function HomeScreen({ navigation }) {
  const [lightStyle, setLightStyle] = useState(true)
  const toggleSwitch = () => setLightStyle(previousState => !previousState)

  return (
    <View style={[lightStyle ? globalStyles.light : globalStyles.dark, globalStyles.container, styles.container]}>
      <Animatable.View animation={fadeIn} duration={4000} style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={globalStyles.header}>Calendar</Text>
        <Text style={globalStyles.text}>Darkmode</Text>
        <Switch 
          trackColor={{ false: '#767577', true: '#e96d5e' }}
          thumbColor={"#f4f3f4"}
          onValueChange={toggleSwitch}
          value={!lightStyle} />
        <View style={styles.ui}>
          <Text style={[globalStyles.text, styles.text]}>Here is a dummy login page. In the future this might require auth but for now, press the button to enter</Text>
          <DefaultButton title="Calendar" onPress={() => {
            navigation.navigate('Calendar', { lightStyle })
          }} />
        </View>
      </Animatable.View>
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
    margin: vw(10)
  }
})