import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import globalStyles from '../styles/global'
import { Calendar } from 'react-native-calendars'
import { getHeight } from '../services/screen'

export default function CalendarScreen({ navigation }) {
  const [markedDates, setMarkedDates] = useState({})
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Calendar style={styles.calendar} markedDates={markedDates} onDayPress={(day) => {
        
        
        //navigation.navigate('Details', { date: day.dateString })
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center'
  },
  calendar: {
    backgroundColor: 'red',
    height: getHeight()
  }
})